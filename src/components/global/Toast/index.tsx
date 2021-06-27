import { createApp } from 'vue';
import Toast from './index.vue';

interface IConfig {
  message: string;
  duration?: number;
}

const createToast = ({ message, duration }: IConfig): void => {
  let timer: NodeJS.Timeout | null = null;
  const toastInstance = createApp(Toast, {
    message,
    showClose: duration ? false : true,
    clickClose: () => {
      closeToast();
    }
  });

  const mountNode = document.createElement('div');
  document.body.appendChild(mountNode);
  toastInstance.mount(mountNode);

  if (duration) {
    timer = setTimeout(() => {
      closeToast();
    }, duration)
  }


  const closeToast = (): void => {
    toastInstance.unmount();
    document.body.removeChild(mountNode);
    clearTimeout(Number(timer));
    timer = null;
  };
};



export default createToast;

// import { defineComponent, onMounted } from 'vue';
// import { useStore } from 'vuex';
// // import useCurrentInstance from '../../hooks/useCurrentInstance'


// export default defineComponent({
//   name: 'App',
//   setup() {
//     const store = useStore()

//     onMounted((): void => {
//       // const { globalProperties } = useCurrentInstance();
//     })

//     return () => (
//       <>
//         <h1>Home</h1>
//         <h1>{store.state.title}</h1>
//       </>
//     );
//   }
// });