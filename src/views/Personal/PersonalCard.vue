<template>
  <div
    class="bk-personal-card set-position"
    :style="cardValue"    
    @mouseover="showPopup = true"
    @mouseleave="showPopup = false"
  >
    {{ item.value }}
    <div
      v-show="showPopup"
      class="card-container"
    >
      {{ item.details }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCard",
  props: { item: { Object } },
  data() {
    return {
      positionValue: {},
       showPopup:false,
    };
   
  },
  computed: {
    cardValue() {
      return this.positionValue;
    }
  },
  created() {},
  mounted() {
  },
  methods:{
    
  }

};
</script>

<style lang="scss" scoped>
.bk-personal-card {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #a267ac, $alpha: 1.0);
  color: white;
  display: flex;
  flex-direction: column-reverse;

}
// calc(var(--rotation) * 1px);
.set-position {
  top: 45%;
  position: absolute;
  pointer-events: visible;
  left: 45%;
  z-index: 3;
  text-align: center;
  width: calc(var(--circleRadius) / 8 * 1px);
  height: calc(var(--circleRadius) / 8 * 1px);
  -webkit-transition: -webkit-transform calc(var(--rot) / 15 * 1s);
  -moz-transition: -moz-transform calc(var(--rot) 15 * 1s);
  -o-transition: -o-transform calc(var(--rot) / 15 * 1s);
  transition: transform calc(var(--rot) / 15 * 1s);
  transform: rotate(calc(var(--rot) * 1deg))
    translate(calc(var(--circleRadius) * 0.5px), 0px)
    rotate(calc(var(--rot) * -1deg));

  &:hover{
      cursor:pointer;
      background-color: rgba($color: #e398f0, $alpha: .5);
      transition: transform calc(var(--rot) / 1 * 1s);
    }
}

.card-container{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:5px;
  min-width: 170px;
  border-radius:20%;
  background-color: rgba($color: #BAFFB4, $alpha: .8);
  color:black;
  transform: rotate(calc(var(--rot) * 1deg))
    translate(calc(var(--circleRadius) * 0.1px), 0px)
    rotate(calc(var(--rot) * -1deg));

 
}

</style>
