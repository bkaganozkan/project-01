<template>
  <div class="background">
    <Header />
    <div class="bk-main-card">
      <div class="bk-circle-container left-container">
        <Personal />
      </div>
      <div class="bk-about-container">
        <div class="bk-about f-20">
          Hi I am <span class="f-24">
            Burak Kağan,
          </span> Developing softwares and unsuccesfull responsive websites.
          I am learning and implement somes into here. And also you can read my blog to catch some valuable my notes.
        </div>
      </div>
      <div class="bk-circle-container right-container">
        <Personal />
      </div>
    </div>
  </div>
</template>

<script>
import Personal from "./Personal/Personality.vue";
import Header from "@/components/Header/Header";
export default {
  name: "Home",
  components: {
    Personal,
    Header
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

.bk-circle-container {
  position: relative;
  padding: 5px;  
}
.left-container {
  left: 25%;
}
.right-container {
  right: 25%;  
}
.bk-about-container{
  height: 750px;

  .bk-about{
    max-width: 500px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 700;
    color:wheat;
    display: inline-block;
    line-height: 2;
    display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  }
}


</style>
