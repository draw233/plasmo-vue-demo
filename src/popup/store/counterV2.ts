// store/counter.ts
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => {
    count.value * 2
  })
  function increment() {
    console.log(222)
    count.value++
  }
  return { count, doubleCount, increment }
}, {
  persist: {
    key: 'myCustomerKey',
    storage: localStorage,
  }
})
// chrome-extension://ofpnmcalabcbjgholdjcjblkibolbppb/chatTab.html?tab=chat&botName=Monica&botUid=monica
// chrome-extension://ofpnmcalabcbjgholdjcjblkibolbppb/chatTab.html?tab=chat&botName=Monica&botUid=monica