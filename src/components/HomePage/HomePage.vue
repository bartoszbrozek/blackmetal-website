<template>
  <div class="home-page page fade-in">
    <div class="flexbox-container">
      <MainTitle></MainTitle>
      <MainNavbar></MainNavbar>
    </div>
  </div>
</template>

<script>
import MainTitle from "../common/MainTitle";
import MainNavbar from "../common/MainNavbar";

export default {
  name: "HomePage",
  components: {
    MainTitle,
    MainNavbar
  },
};
</script>
