<template>
  <div id="app">
    <transition name="topbar-animation" enter-active-class="fade-in" leave-active-class="fade-out">
      <TopNavbar v-show="isTopNavbarVisible"></TopNavbar>
    </transition>
    <div class="fog">
      <div class="fog-img fog-img-1"></div>
      <div class="fog-img fog-img-2"></div>
    </div>
    <transition name="topbar-animation" enter-active-class="fade-in" leave-active-class="fade-out">
      <router-view></router-view>
    </transition>
    <transition name="topbar-animation" enter-active-class="fade-in" leave-active-class="fade-out">
      <FooterBar class="fade-in"></FooterBar>
    </transition>
  </div>
</template>

<script>
import TopNavbar from "./components/common/TopNavbar";
import FooterBar from "./components/common/FooterBar";

export default {
  name: "app",
  components: { TopNavbar, FooterBar },
  watch: {
    $route: function() {
      this.isTopNavbarVisible = this.$route.path !== "/";
    }
  },
  methods: {
    onScroll: function() {
      let scrollTop = document.documentElement.scrollTop;
      this.isTopNavbarVisible = scrollTop < 100;
    }
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.onScroll);
  },
  data: function() {
    return {
      isTopNavbarVisible: this.$route.path !== "/"
    };
  }
};
</script>
