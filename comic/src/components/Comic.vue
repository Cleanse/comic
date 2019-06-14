<template>
    <div class="comic-wrapper">
        <div ref="bookblock" class="bb-bookblock" v-bookblock="options">
            <div class="bb-item" v-for="item in data" :key="item.id">
                <div class="page">
                    <img src="../assets/av-sample.png" alt="Image Title">
                    <div class="bb-div">{{ item.text[0] }}</div>
                </div>

                <div class="page">
                    <img src="../assets/av-sample.png" alt="Image Title 2">
                    <div class="bb-div">{{ item.text[1] }}</div>
                </div>
            </div>
        </div>

        <nav>
            <a class="bb-nav-first" href="javascript:" @click="bookblock.first()">First page</a>
            <a class="bb-nav-prev" href="javascript:" @click="bookblock.prev()">Previous</a>
            <a class="bb-nav-next" href="javascript:" @click="bookblock.next()">Next</a>
            <a class="bb-nav-last" href="javascript:" @click="bookblock.last()">Last page</a>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .comic-wrapper {
        background: #222;
    }

    .bb-bookblock {
        width: 904px;
        height: 640px;
    }

    .bb-item {
        background: #222;
    }

    .page {
        width: 50%;
        float: left;
        height: 100%;
        box-sizing: border-box;
        background: #000;
        border: 1px solid #eee;

        .bb-div {
            margin-top: -2rem;
            background: #efefef;
        }
    }

    .page + .page {
        border-left: 0;
    }

    .page img {
        width: 100%;
        height: auto;
    }

    .cover {
        width: 50%;
        margin-left: auto;
        float: none;
    }

    nav {
        margin-top: 1em;
    }

    .bb-nav-first,
    .bb-nav-prev,
    .bb-nav-next,
    .bb-nav-last {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid #FFDD5F;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        color: #FFDD5F;
    }
</style>

<!--https://codepen.io/jasesmith/pen/GmQbME-->
<script>
    import {data} from "../data/data.js";

    export default {
        data: function () {
            return {
                options: {
                    speed: 1000,
                    shadowSides: 0.8,
                    shadowFlip: 0.7,
                    orientation: 'vertical',
                    hasCover: false
                },
                data: data
            };
        },
        computed: {
            bookblock: function () {
                return this.$refs.bookblock.bookblock;
            }
        }
    };
</script>
