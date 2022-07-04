<script>
import MonkeNav from '../components/icons/MonkeNav.vue'
import HomeNav from '../components/icons/HomeNav.vue'
import ShareNav from '../components/icons/ShareNav.vue'
import AboutNav from '../components/icons/AboutNav.vue'
import DarkModeNav from '../components/icons/DarkModeNav.vue'

export default {
    name: "SideBar",
    components: { HomeNav, MonkeNav, ShareNav, AboutNav, DarkModeNav },
}

</script>

<template>
    <div class="fixed top-0 left h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg ">
        <!--Need to consolidate links into icons!  -->
        <HomeNav />
        <ShareNav />
        <AboutNav />
        <DarkModeNav />
        <!-- Looks like I need to split the Divs then utilize the flex-col-reversed and have it aligned to the bottom.
        I just temporarily linked it to the Three page for ease of access so I can tinker there and have access to it -->
    </div>
</template>