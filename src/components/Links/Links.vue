<template>
  <div class="music page">
    <div class="flexbox-container">
      <div class="textbox text-justified">
        <h3 class="title">LINKS</h3>
        <div class="links">
          <div class="link" id="fb" @click="openLink('https://www.facebook.com/zaglada/')"></div>
          <div class="link" id="bc" @click="openLink('https://zaglada.bandcamp.com/')"></div>
          <div class="link" id="sp" @click="openLink('https://open.spotify.com/artist/1pIWAm9WFqysOwIEMqW8Ms')"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openLink: function(link) {
      window.open(link, "_blank");
    }
  }
};
</script>