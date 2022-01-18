<template>
  <div
    class="bk-personal-card"
    :style="cardStyle"
  >
    {{ item.value }}
  </div>
</template>

<script>
export default {
  name: "PersonalCard",
  props: { item: { Object } },
  computed:{
    
    cardStyle(){
      return {'--bgColor':'red'}
  }}
  
};
</script>

<style lang="scss" scoped>

.bk-personal-card {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A267AC;
  color:white;
}
</style>
