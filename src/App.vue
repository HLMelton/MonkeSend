<script>
import SideBar from './components/Sidebar.vue'

export default {
  components: { SideBar }
}
</script>


<template>
  <div className="flex flex-row">
    <SideBar />
    <div className="content-container">
      <router-view />
    </div>
  </div>
</template>

<style>

</style>
