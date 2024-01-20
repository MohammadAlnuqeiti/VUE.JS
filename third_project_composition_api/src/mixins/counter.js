import { ref } from "vue";

const counterFunction = () => {
  //data
  const counter = ref(0);

  //methods
  const decrease = () => {
    if (counter.value > 0) {
      counter.value--;
    }
  };
  const increase = () => {
    counter.value++;
  };

  return { counter, decrease, increase };
};

export default counterFunction;
