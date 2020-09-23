<template>
    <div class="page-container">
        <img class="logo" src="~assets/img/logo_w.svg" alt="">
        <Generator class="mt-6"/>
    </div>
</template>

<script>
import Generator from "../components/Generator/Generator";

export default {
    name: 'Index',
    components: {Generator},
    head() {
        return {
            title: 'Генератор отчётов',
            meta: [
                {
                    hid: 'index-description',
                    name: 'description',
                    content: 'Сервис для генерации больших объемов отчётов'
                },
            ]
        }
    },

}
</script>

<style scoped lang="scss">
.logo {
    width: 250px;
    margin: 2rem auto;
}
</style>
