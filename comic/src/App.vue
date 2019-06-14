<template>
    <div id="app">
        <Comic></Comic>
    </div>
</template>

<script>
    import Comic from './components/Comic.vue'

    export default {
        name: 'app',
        components: {
            Comic
        }
    }
</script>

<style>
    body {
        background: #222;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: .5rem;
    }
</style>
