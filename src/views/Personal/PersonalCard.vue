<template>
  <div class="bk-personal-card">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "PersonalCard",
  props: { item: { Object } }
};
</script>

<style lang="scss" scoped>
.bk-personal-card {
  border-radius: 50%;
}
</style>
