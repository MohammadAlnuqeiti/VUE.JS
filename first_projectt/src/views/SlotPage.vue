<template>
  <div class="slot">
    <h2>This Is Slot Page</h2>
    <slot-com :name="name">
      <template #slotTitle>
        <h3>this is slot title</h3>
      </template>
      <template #slotText>
        <p>this is slot text</p>
      </template>
    </slot-com>
  </div>
</template>

<script>
import SlotCom from "../components/SlotComponent.vue";

export default {
  data() {
    return {
      name: "mohammad",
    };
  },
  components: {
    SlotCom,
  },
};
</script>
