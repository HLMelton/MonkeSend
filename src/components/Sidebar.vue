<script>
import MonkeNav from '../components/icons/MonkeNav.vue'
import HomeNav from '../components/icons/HomeNav.vue'
import ShareNav from '../components/icons/ShareNav.vue'
import AboutNav from '../components/icons/AboutNav.vue'

export default {
    name: "SideBar",
    components: { HomeNav, MonkeNav, ShareNav, AboutNav },
}

</script>

<template>
    <div class="fixed top-0 left h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg ">
        <!--Need to consolidate links into icons!  -->
        <HomeNav />
        <ShareNav />
        <AboutNav />
    </div>
</template>