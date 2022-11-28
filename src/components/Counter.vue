<template>
    <div class="container">
        <button class="item" v-on:click="increment">increment</button>
        <button class="item" v-on:click="decrement">decrement</button>
    </div>
    <h3 class="myClass">{{count}}</h3>
    <p class="title">Counting</p>
    <CompTwo />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import CompTwo from "./CompTwo.vue"

    export default defineComponent({
        components: {
            CompTwo
        },
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                if (this.count < 25) {
                    this.count++
                }
            },
            decrement() {
                if (this.count > 0) {
                    this.count--
                }
            }
        }
    })
</script>

<style lang="sass">

$color-bg: #2c3e50

%very-important
    color: red
    font-size: 72
    font-weight: 900
    text-transform: uppercase

.title
    @extends %very-important

=transform($property)
    -webkit-transform: $property
    -ms-transform: $property
    transform: $property

.myClass
    background-color: $color-bg
    color: white
    padding: 0 12
    font-family: Arial, sans-serif

.container
    display: flex
    justify-content: space-around
    .item
        background-color: yellow
        +transform(rotate(30deg))


</style>