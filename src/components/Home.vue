<template>
    <div className="fixed top-0">
        <h1>Home</h1>
    </div>
    <p>Name in Store is : {{ name }}</p>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const name = computed(() => {
    return store.state.user.name
})
</script>