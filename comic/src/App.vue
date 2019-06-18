<template>
    <div id="app">
        <div class="episodes-list-wrapper">
            <v-select :options="episodes" @input="setSelected"></v-select>
        </div>
        <Comic></Comic>
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
                return value;
            }
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

    .episodes-list-wrapper {
        width: 904px;
        margin: 0 auto 1rem;
    }
</style>
