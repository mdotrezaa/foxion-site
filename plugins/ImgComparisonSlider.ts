import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('ImgComparisonSlider', ImgComparisonSlider);
});