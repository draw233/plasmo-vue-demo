<template>
    <div>{{ counter.count }} </div>
    <button @click="counter.increment()">+1</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/counterV2'
const counter = useCounterStore()
</script>

<style scoped></style>