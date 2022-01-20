<template>
  <div
    v-if="dataLoaded"
    class="bk-list-container"
  >
    <CircleList
      v-for="(ind, x) in circleData.length"
      :id="circleName"
      :key="ind"
      :items="circleData[x].value"
      radius="750"
      :total-circle="circleData.length + 1"
    >
      <PersonalCard
        v-for="(value, index) in circleData[x].value"
        :key="index"
        :item="value"
      />
    </CircleList>
  </div>
</template>

<script>
import CircleList from "@/components/Circle";
import PersonalCard from "./PersonalCard.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Personal",
  components: {
    CircleList,
    PersonalCard
  },
  props: {
    circleName: { type: [String] }
  },
  data() {
    return {
      dataLoaded: false,
      circleData: []
    };
  },
  created() {
    this.GET_CIRCLE_DATA(this.circleName).then((res) => {
      this.circleData = this.personalData[this.circleName];
      this.dataLoaded = res;
    });
  },
  methods: {
    ...mapActions(["GET_CIRCLE_DATA"])
  },
  computed: {
    ...mapGetters({
      personalData: "getPersonalData"
    })
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
  top: 50%;
  border-radius: 50%;
  background-color: wheat;
}
</style>
