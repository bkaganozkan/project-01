<template>
  <div class="bk-header-card">
    <div class="bk-header">
      <img 
        width="150px"
        src="@/assets/images/bekaozlogo.png"
        alt=""
      >
      Beka-Oz
    </div>
    <div
      class="bk-planet"
      :class="page3DActive ? 'active':''"
      @click="clickedPlanet"
    >
      <img 
     
        src="@/assets/svg/planet.svg"
        width="75"
        height="75"
      >
    </div>
    <div class="bk-header" />
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){return{
    page3DActive:false,
  }},


  methods:{
    clickedPlanet(){
      this.page3DActive = !this.page3DActive
      this.$emit('activePage', this.page3DActive)
    }
  }
};
</script>

<style>
</style>