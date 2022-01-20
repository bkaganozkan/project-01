<template>
  <div
    class="bk-personal-card set-position"
    :style="cardValue"
  >
    {{ item.value }}
  </div>
</template>

<script>
export default {
  name: "PersonalCard",
  props: { item: { Object } },
  data() {
    return {
      positionValue: {}
    };
  },
  computed: {
    cardValue() {
      return this.positionValue;
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.bk-personal-card {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a267ac;
  color: white;
}
// calc(var(--rotation) * 1px);
.set-position {
  top: 45%;
  position: absolute;
  pointer-events: visible;
  border: 1px solid gray;
  left: 45%;
  z-index: 3;
  text-align: center;
  width: calc(var(--circleRadius) / 8 * 1px);
  height: calc(var(--circleRadius) / 8 * 1px);
  -webkit-transition: -webkit-transform calc(var(--rot) / 60 * 1s);
  -moz-transition: -moz-transform calc(var(--rot) / 60 * 1s);
  -o-transition: -o-transform calc(var(--rot) / 60 * 1s);
  transition: transform calc(var(--rot) / 60 * 1s);
  transform: rotate(calc(var(--rot) * 1deg))
    translate(calc(var(--circleRadius) * 0.5px), 0px)
    rotate(calc(var(--rot) * -1deg));
}
</style>
