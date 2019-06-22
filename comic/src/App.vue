<template>
    <div class="wrapper">
        <nav class="main-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/episodes">Episodes</router-link>
            <router-link to="/episode/1-0">Episode 1</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>

        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    [v-cloak] {
        display: none;
    }

    body {
        margin: 0;
    }

    .wrapper {
        width: 1024px;
        margin: 0 auto;
    }

    .main-nav {
        width: 100%;
        display: flex;

        a {
            display: inline-block;
            margin: 0 1rem 0 0;
            padding: 0.375rem 0.75rem;
            vertical-align: middle;
            user-select: none;
            border: 1px solid #003b7b;
            border-bottom-left-radius: .5rem;
            border-bottom-right-radius: .5rem;
            color: #003b7b;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            text-align: center;
            white-space: nowrap;
            text-decoration: none;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
    }
</style>
