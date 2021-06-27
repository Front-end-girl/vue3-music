import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        {/* 是否需要<keep-live></keep-live> */}
        <RouterView />
      </>
    );
  }
});