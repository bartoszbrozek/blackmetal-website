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
export default {
  data: function() {
    return {
      links: [
        {
          name: "NEWS",
          to: "/news",
          icon: {
            name: "cross",
            rotation: 180
          }
        },
        {
          name: "BIOGRAPHY",
          to: "/biography",
          icon: {
            name: "cross",
            rotation: 180
          }
        },
        {
          name: "MUSIC",
          to: "/music",
          icon: {
            name: "cross",
            rotation: 180
          }
        }
      ]
    };
  }
};
</script>