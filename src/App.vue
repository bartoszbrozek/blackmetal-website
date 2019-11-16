<template>
  <div id="app">
    <transition name="topbar-animation" enter-active-class="fade-in" leave-active-class="fade-out">
      <TopNavbar v-show="isTopNavbarVisible"></TopNavbar>
    </transition>
    <div class="fog">
      <div class="fog-img fog-img-1"></div>
      <div class="fog-img fog-img-2"></div>
    </div>
    <transition name="topbar-animation" enter-to-class="fade-in" leave-to-class="fade-out">
      <router-view></router-view>
    </transition>
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
