<template>
  <div class="bk-main-card flex jc-sb ai-c">
    <div class="bk-circle-container left-container">
      <Personal />
    </div>
    <div>Burası About</div>
    <div class="bk-circle-container right-container">
      <Personal />
    </div>
  </div>
</template>

<script>
import Personal from "./Personal/Personality.vue";
export default {
  name: "Home",
  components: {
    Personal
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.bk-main-card {
  height: 100%;
  background-color: wheat;
}
.bk-circle-container {
  position: relative;
  padding: 10px;
  width: 100%;
  height: 100%;
  top: 50%;
}
.left-container {
  left: 25%;
}
.right-container {
  right: 25%;
}
</style>
