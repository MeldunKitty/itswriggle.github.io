<template>
    <div class="card card--thin card--centered">
        <div class="card__header">
            <h1>Генератор отчётов</h1>
            <div class="card__header__action">
                <vs-button shadow size="large" @click="resetForm">
                    <i class='bx bx-reset mr-1'></i>Сброс
                </vs-button>
                <vs-button size="large" @click="generateResult">
                    <i class='bx bx-play-circle mr-1'></i>Сгенерировать
                </vs-button>
            </div>
        </div>
        <div class="card__body">
            <div class="form">
                <div class="form__row">
                    <div class="form__item">
                        <vs-input
                            type="date"
                            v-model="form.start_date"
                            label="Начало периода"
                        />
                    </div>
                    <div class="form__item">
                        <vs-input
                            type="date"
                            v-model="form.end_date"
                            label="Конец периода"
                            :min="form.start_date"
                        />
                    </div>
                    <div class="form__item form__item--w-auto">
                        <vs-switch v-model="form.vacation" success>
                            <template #off>
                                <i class='bx bxs-bot mr-1'></i>У меня не было отпуска
                            </template>
                            <template #on>
                                <i class='bx bxs-cool mr-1'></i>У меня был отпуск
                            </template>
                        </vs-switch>
                    </div>
                </div>

                <template v-if="!form.vacation">
                    <div class="form__row">
                        <div class="form__item">
                            <vs-select
                                class="w-full"
                                label="Я работал в следующих проектах..."
                                filter
                                multiple
                                placeholder="Выбери проекты"
                                v-model="form.projects"
                            >
                                <vs-option v-for="projectItem in projectsList"
                                           :label="projectItem"
                                           :value="projectItem"
                                           :key="projectItem"
                                >
                                    {{ projectItem }}
                                </vs-option>
                            </vs-select>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="card__footer">
            <div class="generator-result">
                <div class="generator-result__header">
                    <h2>Сгенерированный отчёт</h2>
                    <vs-button shadow size="large" :disabled="!result" @click="copyResult">
                        <i class='bx bx-copy mr-1'></i>Копировать
                    </vs-button>
                </div>

                <div class="generator-result__body">
                    <pre v-html="result" id="result-box"></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Generator",
    data() {
        return {
            form: {
                start_date: null,
                end_date: null,
                vacation: false,
                projects: []
            },
            result: null,
            projectsList: projectsSeed
        }
    },
    mounted() {
        if (localStorage.getItem('form')) {
            this.form = JSON.parse(localStorage.getItem('form'))
        }
    },
    watch: {
        form: {
            handler(value) {
                if (!value.end_date) {
                    this.form.end_date = value.start_date;
                }

                if (value.end_date) {

                    const start = new Date(value.start_date);
                    const end = new Date(value.end_date);

                    if (end < start) {
                        this.form.end_date = null
                    }
                }

                localStorage.setItem('form', JSON.stringify(value))
            },
            deep: true
        }
    },
    methods: {
        generateResult() {
            if (!this.validateForm()) {
                return false;
            }

            const startDay = new Date(this.form.start_date);
            const endDay = new Date(this.form.end_date);

            let report = '';
            for (let day = startDay; day <= endDay; day.setDate(day.getDate() + 1)) {
                report += this.printDayReport(day, this.generateDayProjects(this.form.projects))
            }

            this.result = report.trim();
        },
        printDayReport(day, projects) {
            let dayReport = `/итог ${day.toLocaleDateString()}\n`;

            projects.map(project => {
                dayReport += `${project.title} | ${project.tasks} | ${project.hours}\n`
            })
            dayReport += `\n`;

            return dayReport
        },
        generateDayProjects(projects) {
            if (this.form.vacation) {
                return [
                    {
                        title: 'Отпуск',
                        tasks: '-',
                        hours: 8
                    }
                ]
            }

            let randomPickedProjects = [];

            let hoursLimit = 8;
            const rndSeed = projects.length * 2;
            const rndDelimiter = 2.6;

            projects.map((project_title, index) => {
                let rnd = this.getRandomInt(1, rndSeed);

                if ((rnd > rndSeed / rndDelimiter) || index === projects.length - 1) {
                    let projectHours = this.getRandomInt(1, hoursLimit)

                    if (projects.length === 1 || index === projects.length - 1) {
                        projectHours = hoursLimit;
                    } else {
                        hoursLimit = hoursLimit - projectHours;
                    }

                    randomPickedProjects.push({
                        title: project_title,
                        tasks: this.generateProjectTasks(),
                        hours: projectHours
                    })
                }
            })

            return randomPickedProjects
        },
        generateProjectTasks(recurs = false) {
            let tasks = '';

            const verb = tasksSeed.verbs[this.getRandomInt(0, tasksSeed.verbs.length)];
            const noun = tasksSeed.nouns[this.getRandomInt(0, tasksSeed.nouns.length)];
            const tech = tasksSeed.techs[this.getRandomInt(0, tasksSeed.techs.length)];
            tasks += `${verb} ${tech} ${noun}`;

            if (!recurs && this.getRandomInt(0, 4) > 2) {
                tasks += `, ${this.generateProjectTasks(true)}`;
            }

            return tasks;
        },
        differenceInDays(date_a, date_b) {
            return Math.ceil(Math.abs(date_a - date_b) / (1000 * 60 * 60 * 24));
        },
        resetForm() {
            this.form = {
                start_date: null,
                end_date: null,
                vacation: false,
                projects: []
            };

            this.result = null;
        },
        validateForm() {
            if (this.form.vacation) {
                return true;
            } else {
                const notifyOptions = {
                    duration: null,
                    progress: 'auto',
                    color: 'danger',
                    position: 'top-right',
                };

                if (!this.form.start_date) {
                    this.$vs.notification({...notifyOptions, title: 'Необходимо указать начало периода'})
                    return false;
                }

                if (!this.form.projects.length) {
                    this.$vs.notification({...notifyOptions, title: 'Необходимо указать проекты'})
                    return false;
                }

                return true;
            }
        },
        copyResult() {
            let range = document.createRange();
            range.selectNode(document.getElementById('result-box'));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();

            this.$vs.notification({
                position: 'top-right',
                title: 'Отчёт скопирован',
                text: `Отчёт был скопирован в буфер обмена, теперь ты можешь отправить его в чатик для отчётов`
            })
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        }
    }
}

const projectsSeed = [
    'LeadScoring', 'SmartPC', 'Reminder', 'bng', 'TheBell', 'Coffee', 'tgc', 'MyLive', 'itsmarket', 'TassNewm',
    '1939', 'Аудит', 'Больничный', 'Издательство', 'Командировка', 'Конференция', 'курс LSF',
    'Нашествие', 'обучение cka', 'Отпуск', 'Петпроджект', 'Подушкин', 'постнаука', 'Структрука',
    'Техподдержка', 'Умный щит', 'Учеба', 'asodesk', 'BBDO', 'biin', 'Cтруктурка', 'Caramba',
    'CMTT',  'crex', 'Crypto', 'Cupis', 'DeckRobot', 'DevOps', 'dop connector', 'essm',
    'getcider', 'GoldBar / GB', 'GPN', 'GPN ВР', 'GPN IATA PoC', 'Grafana', 'HealthCoin', 'hezzl',
    'isolate', 'ITS 24mon', 'ITS Annotate', 'ITS CP', 'ITS CRM', 'ITS Dashboard', 'ITS New 24mon',
    'ITS sms invoice', 'ITS Telegram', 'its_cinema', 'its-research', 'Its-vacation', 'its-webchat',
    'its-wifi-scaner', 'itshelp', 'ITStagram', 'ITSumma', 'itsvideo', 'Kaiten', 'kube-debugger',
    'Legko', 'LinguaLeo', 'Livedune', 'Management', 'medical'
]

const tasksSeed = {
    verbs: [
        'fixing',
        'refactor',
        'research',
        'test',
        'management',
        'refactoring',
        'impr',
        'review',
        'debug',
        'logging',
        'update',
        'deploy',
        'sync',
        'e2e'
    ],
    nouns: [
        'bugs',
        'features',
        'tasks',
        'tests',
        'smart contracts',
        'service',
        'layout',
        'config',
        'ux/ui'
    ],
    techs: [
        'angular',
        'vue',
        'laravel',
        'amp',
        'pwa',
        'ssr',
        'nodejs',
        'docker',
        'websocket',
        ''
    ]
}

</script>

<style lang="scss">
.generator-result {
    display: flex;
    flex-direction: column;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    &__body {
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, .03);
        padding: 1rem;

        pre {
            max-height: 400px;
            overflow-y: auto;
        }
    }
}

.vs-select-content {
    max-width: none !important;
}


</style>
