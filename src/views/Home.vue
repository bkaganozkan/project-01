<template>
  <div class="background">
    <Header @activePage="activeModelPage" />
    <div
      class="bk-main-card"
      :class="true ? 'flex-center' : null"
    >
      <ThreeWorld v-if="true" />
      <div v-if="!true">
        <div
          id="left-container"
          class="bk-circle-container left-container"
          :class="[closeCircles ? 'close':'']"
        >
          <Personal
            id="Circle-1"
            circle-name="Circle 1"
          />
        </div>
        <div class="bk-about-container">
          <div class="bk-about f-20">
            Hi I am <span class="f-24">
              Burak Kağan,
            </span> Developing softwares and unsuccesfull responsive websites.
            I am learning and implement somes into here. And also you can read my blog to catch some valuable my notes.
          </div>
        </div>
        <div
          id="right-container"
          class="bk-circle-container right-container"
          :class="[closeCircles ? 'close':'']"
        >
          <Personal
            id="Circle-2"
            circle-name="Circle 2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Personal from "./Personal/Personality.vue";
import Header from "@/components/Header/Header";
import ThreeWorld from "./ThreeWorld/ThreeWorld.vue";
export default {
  name: "Home",
  components: {
    Personal,
    Header,ThreeWorld,
  },
  data() {
    return {
      closeCircles:false
    };
  },

  methods:{
    activeModelPage(value){
      
     this.closeCircles = value
      }
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
  transition: left .7s;
  &.close{
    left: -25%;
  }
}
.right-container {
  right: 25%;  
  transition: right .7s;
  &.close{
    right: -25%;
  }
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
