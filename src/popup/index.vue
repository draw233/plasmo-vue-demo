<template>
    <echoText />
    <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/opt1">Go Opt1</RouterLink>
        <RouterLink to="/opt2">Go Opt2</RouterLink>
        <RouterLink to="/page1">Go page1</RouterLink>
    </nav>

    <counter />
    <button @click="openFullscreen">全屏模式</button>
    <button @click="getTab1">gotab1</button>
    <button @click="getTab2">gotab2</button>
    <button @click="goPage1">go page 1</button>
    <option1 />
    <RouterView />
</template>

<script lang="ts" setup>
import echoText from './page/echoText.vue'
import counter from './page/counter.vue'
import option1 from '../options/option1.vue'
import router from '../router'

import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const openFullscreen = () => {
    chrome.tabs.create({
        url: chrome.runtime.getURL('popup.html') + '#/fullscreen'
    })
}
const getTab1 = () => {
    chrome.tabs.create({ url: "/tabs/tab1.html" })
}
const getTab2 = () => {
    chrome.tabs.create({ url: "/tabs/tab2.html" })
}

const goPage1 = () => {
    chrome.tabs.create({ url: "/pages/page1.html" })
}

defineOptions({
    prepare(app: App) {
        // Use any plugins here:
        // app.use
        const pinia = createPinia()
        pinia.use(piniaPluginPersistedstate)
        app.use(pinia)
        app.use(router)
    }
})
</script>

<style lang="scss" scoped>
button {
    margin: 10px;
    padding: 8px 16px;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
}
</style>