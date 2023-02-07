<template>
  <h1>Color Picker Game</h1>

  <div>{{ msg }}</div>

  <button v-for="color in colors" :key="color" @click="colorMatch(color)">
    {{ color }}
  </button>
</template>

<script>
import ColorPickerComposable from '../composables/color-picker-game';

export default {
  setup() {
    const { colors, msg, colorMatch } = ColorPickerComposable();

    return {
      colors,
      msg,
      colorMatch,
    };
  }
};
</script>

<style></style>
