<template>
    <div id="app">
        <Comic></Comic>
        <div class="episodes-list-wrapper">
            <v-select :options="episodes" @input="setSelected"></v-select>
        </div>
    </div>
</template>

<script>
    import Comic from './components/Comic.vue';
    import { episodes } from "./data/episodes.js";

    export default {
        name: 'app',
        components: {
            Comic
        },
        data: function () {
            return {
                episodes: episodes
            };
        },
        methods: {
            setSelected(value) {
                console.log(value.code);
            }
        }
    }
</script>

<style>
    body {
        background: #fff;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: .5rem;
    }

    .episodes-list-wrapper {
        width: 904px;
        margin: 0 auto;
    }
</style>
