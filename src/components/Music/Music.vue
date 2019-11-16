<template>
  <div class="music page">
    <div class="flexbox-container">
      <div class="textbox text-justified">
        <h3 class="title">MUSIC</h3>

        <div class="albums">
          <div class="album" v-for="(album, albumID) in albums" v-bind:key="albumID">
            <div v-html="album.link"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import albums from "../../assets/data/albums.json";
export default {
  computed: {
    albums() {
      return albums;
    }
  }
};
</script>
