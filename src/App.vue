<template>
  <div id="app">
    <TopNavbar v-show="isTopNavbarVisible"></TopNavbar>
    <div class="fog">
      <div class="fog-img fog-img-1"></div>
      <div class="fog-img fog-img-2"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavbar from "./components/common/TopNavbar";

export default {
  name: "app",
  components: { TopNavbar },
  watch: {
    $route: function() {
      if (this.$route.path !== "/") {
        this.isTopNavbarVisible = true
      } else {
        this.isTopNavbarVisible = false
      }
    }
  },
  data: function() {
    return {
      isTopNavbarVisible: false
    };
  }
};
</script>
