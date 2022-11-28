<template>
    <div>
        <button v-on:click="increment">increment</button>
        <button v-on:click="decrement">decrement</button>
        <h3>{{count}}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

    export default defineComponent({
        components: {},
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

<style>

</style>