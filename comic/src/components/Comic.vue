<template>
    <div class="comic-wrapper">
        <div ref="bookblock" class="bb-bookblock" v-bookblock="options">
            <div class="bb-item" v-for="i in rowCount" v-bind:key="i.id">
                <div class="page" v-for="(item, index) in pageCountInRow(i)" v-bind:key="item.id">
                    <img :src="item.image"
                         :alt="item.title">
                    <div class="bb-div">
                        <a class="bb-nav-prev" href="javascript:"
                           v-if="index % 2"
                           @click="bookblock.next()">Next</a>
                        <a class="bb-nav-next" href="javascript:"
                           v-else
                           @click="bookblock.prev()">Previous</a>
                    </div>
                </div>
            </div>
        </div>

        <nav>
            <a class="bb-nav-first"
               v-if="episode.links.prev"
               v-bind:href="episode.links.prev">Previous Episode</a>
            <a class="bb-nav-first" href="javascript:"
               @click="bookblock.first()">First page</a>
            <a class="bb-nav-last" href="javascript:"
               @click="bookblock.last()">Last page</a>
            <a class="bb-nav-last"
               v-if="episode.links.next"
               v-bind:href="episode.links.next">Next Episode</a>
        </nav>
    </div>
</template>

<!-- https://codepen.io/jasesmith/pen/GmQbME -->
<script>
    import { episode } from "../data/data.js";

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
                pagesPerRow: 2,
                episode: episode
            };
        },
        computed: {
            bookblock: function () {
                return this.$refs.bookblock.bookblock;
            },
            rowCount: function () {
                return Math.ceil(this.episode.pages.length / this.pagesPerRow);
            }
        },
        methods: {
            setSelected(value) {
                return value;
            },
            pageCountInRow: function (index) {
                return this.episode.pages.slice((index - 1) * this.pagesPerRow, index * this.pagesPerRow)
            }
        }
    };
</script>

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
        display: flex;
        justify-content: center;
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
