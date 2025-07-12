<template>
  <div>
    <ImgComparisonSlider class="hero-slider">
      <!-- eslint-disable -->
      <img slot="first" class="first-img" src="/images/before.svg" />
      <img slot="second" class="second-img" src="/images/after.svg" />
      <!-- eslint-enable -->
    </ImgComparisonSlider>
    <section id="about-us" class="bg-white py-16 px-16">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl font-bold mb-4">About Us</h2>
          <p class="text-gray-600 mb-4">
            Foxion Technologies is a technology innovation company that reimagines how organizations operate in a
            digital world. We build AI-powered and people-first systems that simplify complex workflows, automate
            decision-making, and scale with precision. From HR operations to industrial AI, our technology adapts to
            you, not the other way around.
          </p>
          <p class="text-gray-600">
            Our fully customizable solutions combine cutting-edge in-house AI development with deep business
            understanding to deliver results that go beyond your expectations.
          </p>
        </div>
        <div class="px-8">
          <h3 class="text-xl font-semibold mb-4">Trusted by <br><span class="text-3xl font-bold">30+ Companies</span>
          </h3>
          <div class="grid grid-cols-3 gap-4 items-center">
            <img 
              src="/images/national-geographic.png"
              alt="National Geographic" 
              class="h-12 object-contain">
            <img src="/images/radikari.png" alt="Radikari" class="h-12 object-contain">
            <img src="/images/brin.png" alt="BRIN" class="h-12 object-contain">
            <img src="/images/samudera.png" alt="Samudera" class="h-12 object-contain">
            <img src="/images/gojekk.png" alt="Gojek" class="h-12 object-contain">
            <img src="/images/dana.png" alt="Dana" class="h-12 object-contain">
            <img src="/images/foresthree.png" alt="Foresthree" class="h-12 object-contain">
            <img src="/images/stafbook.png" alt="Stafbook" class="h-12 object-contain">
            <!-- Add other logos here -->
          </div>
          <p class="mt-4 text-gray-500">and more...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: 'ExampleComponent',
  components: {
    ImgComparisonSlider,
  },
};
</script>

<style lang="scss">
.hero-slider {
  width: 100%;
  height: 100vh;

  .first-img,
  .second-img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}
</style>