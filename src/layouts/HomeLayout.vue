<template>
  <div class="home-container">
    <Header v-once />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header/index.vue';

export default defineComponent({
  name: 'HomeLayout',
  components: {
    Header,
  },
});
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}
</style>
