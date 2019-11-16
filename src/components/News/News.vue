<template>
  <div class="music page">
    <div class="flexbox-container">
      <div class="textbox text-justified">
        <h3 class="title">NEWS</h3>

        <div class="news-feed">
          <div class="news-node" v-for="(newsNode, newsID) in news" v-bind:key="newsID">
            <section class="date" v-html="newsNode.date"></section>
            <h4 class="title" v-html="newsNode.title"></h4>

            <section class="content" v-html="newsNode.content"></section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import news from "../../assets/data/news.json";
export default {
  computed: {
    news() {
      return news;
    }
  }
};
</script>
