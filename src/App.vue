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
      this.isTopNavbarVisible = this.$route.path !== "/";
    }
  },
  data: function() {
    return {
      isTopNavbarVisible: this.$route.path !== "/"
    };
  }
};
</script>
