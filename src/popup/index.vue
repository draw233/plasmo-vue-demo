<template>
    <div>
        <textarea rows="2" cols="5" v-model="myText" />
    </div>
    <button @click="saveData">Save</button>
    <button @click="showData">showData</button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { STORAGE_KEYS } from '../constants/storage'
const myText = ref('')

onMounted(() => {
    myText.value = localStorage.getItem(STORAGE_KEYS.TEXT_DATA)
})

const saveData = () => {
    localStorage.setItem(STORAGE_KEYS.TEXT_DATA, myText.value)
}

const showData = () => {
    alert(localStorage.getItem(STORAGE_KEYS.TEXT_DATA))
}
</script>

<style scoped></style>