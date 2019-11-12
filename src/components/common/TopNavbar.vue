<template>
  <header>
    <div class="brand" @click="backToMainMenu"></div>
    <nav>
      <ul class="top-navbar">
        <li v-for="(link, key) in links" v-bind:key="key">
          <router-link class="primary-link" :to="link.to">
            <font-awesome-icon :icon="link.icon.name" :rotation="link.icon.rotation" />
            {{link.name}}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import links from "../../assets/data/links.json";
export default {
  computed: {
    links() {
      return links;
    }
  },
  methods: {
    backToMainMenu: function() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    }
  }
};
</script>