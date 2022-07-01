<script>
import SideBar from './components/Sidebar.vue'

export default {
  components: { SideBar }
}
</script>


<template>
  <SideBar />
    <div className="content-center">
      <router-view />
    </div>
</template>

<style>

</style>
