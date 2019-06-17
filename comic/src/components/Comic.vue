<template>
    <div class="comic-wrapper">
        <div ref="bookblock" class="bb-bookblock" v-bookblock="options">
            <div class="bb-item" v-for="item in episode.pages" :key="item.id">
                <div class="page">
                    <img v-bind:src="item.images[0]" alt="Image Title">
                    <div class="bb-div">
                        <a class="bb-nav-prev" href="javascript:" @click="bookblock.prev()">Previous</a>
                    </div>
                </div>

                <div class="page">
                    <img v-if="item.images[1]" v-bind:src="item.images[1]" alt="Image Title 2">
                    <div class="bb-div">
                        <a class="bb-nav-next" href="javascript:" @click="bookblock.next()">Next</a>
                    </div>
                </div>
            </div>
        </div>

        <nav>
            <a class="bb-nav-first" v-if="episode.links.prev" v-bind:href="episode.links.prev">Previous Episode</a>
            <a class="bb-nav-first" href="javascript:" @click="bookblock.first()">First page</a>
            <a class="bb-nav-last" href="javascript:" @click="bookblock.last()">Last page</a>
            <a class="bb-nav-last" v-if="episode.links.next" v-bind:href="episode.links.next">Next Episode</a>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .comic-wrapper {
        background: #222;
    }

    .bb-bookblock {
        width: 904px;
        height: 656px;
    }

    .bb-item {
        background: #222;
    }

    .page {
        width: 50%;
        float: left;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        background: #000;
        border: 1px solid #eee;

        .bb-div {
            height: 100%;
            width: 100%;
            position: absolute;
            bottom: 0;

            background-image: linear-gradient(to right, rgba(255, 255, 255, .1) 95%, #DADADA 100%);
            -webkit-box-shadow: inset 0 0 5px #666;
            -moz-box-shadow: inset 0 0 5px #666;
            -o-box-shadow: inset 0 0 5px #666;
            -ms-box-shadow: inset 0 0 5px #666;
            box-shadow: inset 0 0 5px #666;

            .bb-nav-prev,
            .bb-nav-next {
                height: 100%;
                width: 100%;
                padding: 0;
                margin: 0;
                opacity: 0;
                display: block;

                &:hover {
                    opacity: 1;
                }
            }

            .bb-nav-prev, .bb-nav-next {
                color: #666;
                font-size: .5rem;
                font-style: italic;
                text-decoration: none;
                line-height: 1.5rem;
            }
        }

        &:nth-child(2) .bb-div {
            right: 0;
            background-image: linear-gradient(to left, rgba(255, 255, 255, .1) 95%, #DADADA 100%);
            -webkit-box-shadow: inset 0 0 5px #666;
            -moz-box-shadow: inset 0 0 5px #666;
            -o-box-shadow: inset 0 0 5px #666;
            -ms-box-shadow: inset 0 0 5px #666;
            box-shadow: inset 0 0 5px #666;
        }
    }

    .page + .page {
        border-left: 0;
    }

    .page img {
        width: 100%;
        height: auto;
    }

    nav {
        margin-top: 1em;
    }

    .bb-nav-first,
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
    import { data } from "../data/data.js";

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
                episode: data
            };
        },
        computed: {
            bookblock: function () {
                return this.$refs.bookblock.bookblock;
            }
        }
    };
</script>
