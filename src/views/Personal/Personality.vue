<template>
  <div class="bk-list-container">
    <CircleList
      v-for="ind in 3"
      :key="ind"
      :items="PersonalityData.values"
      :circle-name="PersonalityData.title"
      radius="750"
    >
      <PersonalCard
        v-for="(value, index) in PersonalityData.values"
        :key="index"
        :item="value"
      />
    </CircleList>
  </div>
</template>

<script>
import CircleList from "@/components/Circle";
import PersonalCard from "./PersonalCard.vue";
export default {
  name: "Personal",
  components: {
    CircleList,
    PersonalCard
  },
  data() {
    return {
      PersonalityData: {
        title: "Personal",
        values: ["War", "Against", "Bordo", "Teyoo"]
      }
    };
  }
};
</script>

<style lang="scss">
// .bk-card-container {
//   position: relative;
//   height: 120%;
//   overflow: hidden;
// }
.bk-list-container {
  position: relative;
  width: 100%;
  top:50%;
  border-radius: 50%;
  background-color: wheat;
}
</style>
