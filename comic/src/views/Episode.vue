<template>
    <div class="episode-wrapper">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div v-if="episode" class="content">
            <h2>{{ episode.title }}</h2>
            <p>{{ episode.body }}</p>
        </div>

        <div v-else class="content">
            <h2>{{ $route.params.id }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                episode: null,
                error: null
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.error = this.episode = null;
                this.loading = true;
            }
        }
    }
</script>