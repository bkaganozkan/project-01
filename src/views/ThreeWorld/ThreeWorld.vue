<template>
  <div
    ref="threeWorldContainer"
    class="three-world-container"
  >
    <canvas
      ref="main-scene-canvas"
      class="main-scene-canvas"
    />
  </div>
</template>

<script>
import MainScene from "./_helpers/MainScene";
import Starship from "./_helpers/Objects/Starship";
export default {
  name: "MainScene",
  data() {
    return {
      mainScreen: null,

      spaceship: null,
    };
  },

  created() {
    this.mainScreen = new MainScene();
  },

  async mounted() {
    // Create Threejs Scene
    this.mainScreen.SetCanvas(this.$refs["main-scene-canvas"]);
    // console.log(this.$refs["threeWorldContainer"]);
    this.mainScreen.AddStats(this.$refs["threeWorldContainer"]);

    await this.mainScreen.CreateMainScene();

    this.spaceship = new Starship("spaceShip.fbx");
    await this.spaceship.CreateObject();
    await this.spaceship.SetObjectMovement(
      this.mainScreen.camera,
      this.mainScreen.renderer.domElement
    );
     this.mainScreen.AddObject(this.spaceship);

    
    this.mainScreen.RunScene();
  },
};
</script>

<style lang='scss' >
.three-world-container {
  display: block;
  position: relative;
  height: 75vh;
  width: 90vw;
  background-color: red;
}
.main-scene-canvas {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>