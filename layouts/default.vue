<template>
    <Nuxt />
</template>

<script>
export default {
    name: 'Index',
    head() {
        return {
            title: 'Генератор отмазок',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Сервис для генерации больших объемов отчётов'
                },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        }
    }
}
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
