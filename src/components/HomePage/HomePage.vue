<template>
  <div class="home-page">
    <div class="flexbox-container">
      <div>
        <h3>BLACK METAL FROM POLAND</h3>
      </div>

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
  }
};
</script>
