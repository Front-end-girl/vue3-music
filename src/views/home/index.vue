<template>
  <DiscoverMenu :menuList="discoverMenu" />
  <Banner :bannerList="bannerList" />
  <div @click="togglePlayStatus(playingStatus)" style="cursor: pointer">
    test Store --- playingStatus---{{ playingStatus }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { discoverMenu } from '@/configs/localData';
import { IState } from './typing';
import { httpGetBanners, BannerTypeEnum } from '@/requests/recommend';
import { SET_PLAYING_STATUS } from '@/store/player/actionTypes';
import DiscoverMenu from '@/components/Menu/index.vue';
import Banner from '@/components/Banner/index.vue';

// import useCurrentInstance from '@/hooks/useCurrentInstance'; //跟单页面引用一致

export default defineComponent({
  name: 'Home',
  components: {
    DiscoverMenu,
    Banner,
  },
  setup() {
    const state = reactive<IState>({
      bannerList: [], // banner
    });

    const store = useStore();
    const stateStore = store.state.player;

    onMounted((): void => {
      // const { globalProperties } = useCurrentInstance();
      // globalProperties.$createToast({
      //   message:'我是弹框'
      // })

      getBannerList();
    });

    /**
     * 获取banner数据
     */
    const getBannerList = async () => {
      const { banners } = await httpGetBanners(BannerTypeEnum.PC);
      state.bannerList = banners;
    };

    /**
     * 切换播放状态
     */
    const togglePlayStatus = (status: boolean): void => {
      console.log('切换状态');
      store.commit(SET_PLAYING_STATUS, !status);
    };

    return {
      ...toRefs(state),
      ...toRefs(stateStore),
      discoverMenu,
      togglePlayStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>