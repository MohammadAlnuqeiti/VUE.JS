<template>
  <div class="slot-com">
    <h2>This is components</h2>
    <p>my name is : {{ name }}</p>

    <slot name="slotTitle"></slot>
    <slot name="slotText"></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: Text,
    },
  },
};
</script>
