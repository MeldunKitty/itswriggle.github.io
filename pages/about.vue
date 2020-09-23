<template>
    <div class="page-container">
        тут страница эбаут
    </div>
</template>

<script>
export default {
    name: 'About',
    head() {
        return {
            title: 'О проекте',
            meta: [
                {
                    hid: 'about-description',
                    name: 'description',
                    content: 'Немного о сервисе генераций отчётов'
                },
            ]
        }
    }
}
</script>
