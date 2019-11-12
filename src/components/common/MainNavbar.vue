<template>
  <div class="mainNavbar">
    <ul class="navbar">
      <li v-for="(link, key) in links" v-bind:key="key">
        <router-link :to="link.to">
          <font-awesome-icon :icon="link.icon.name" :rotation="link.icon.rotation" />
          {{link.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import links from '../../assets/data/links.json'
export default {
  computed: {
    links() {
      return links 
    }
  }
};
</script>