<template>
  <div class="slot">
    <h2>This Is Slot Page</h2>
    <keep-alive>
      <slot-com name="ahmed" v-if="!isComTwo">
        <template #slotTitle>
          <h3>this is slot title</h3>
        </template>
        <template #slotText>
          <p>this is slot text</p>
        </template>
        <template #slotForm>
          <p>form 1</p>
          <form>
            <input type="text" name="name" />
            <input type="password" name="password" />
            <input type="button" value="submit" />
          </form>
        </template>
      </slot-com>
    </keep-alive>
    <keep-alive>
      <slotcom-two name="mohammad" v-if="isComTwo">
        <template #slotTitle>
          <h3>this is slot title</h3>
        </template>
        <template #slotText>
          <p>this is slot text</p>
        </template>
        <template #slotForm>
          <p>form 2</p>
          <form>
            <input type="text" name="name" />
            <input type="password" name="password" />
            <input type="button" value="submit" />
          </form>
        </template>
      </slotcom-two>
    </keep-alive>
    <button @click="isComTwo = !isComTwo">chand component</button>
  </div>
</template>

<script>
import SlotCom from "../components/SlotComponent.vue";
import SlotcomTwo from "../components/SlotComponent.vue";

export default {
  data() {
    return {
      isComTwo: false,
    };
  },
  components: {
    SlotCom,
    SlotcomTwo,
  },
};
</script>
