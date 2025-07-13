<template>
    <div class="relative w-full h-full">
      <ImgComparisonSlider class="hero-slider" :value="100">
        <!-- eslint-disable -->
        <img slot="first" class="first-img" src="/images/before.svg" />
        <img slot="second" class="second-img" src="/images/after.svg" />
        <svg slot="handle" width="98" height="1080" viewBox="0 0 98 1080" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="49" y1="1.74846e-07" x2="49" y2="1087" stroke="white" stroke-width="8" />
          <path d="M49 424L98 473L49 522L0 473L49 424Z" fill="white" />
          <path
            d="M44.4199 461.58C44.234 461.392 44.0127 461.244 43.769 461.142C43.5253 461.041 43.2639 460.988 42.9999 460.988C42.7359 460.988 42.4744 461.041 42.2307 461.142C41.987 461.244 41.7658 461.392 41.5799 461.58L31.5799 471.58C31.3924 471.766 31.2436 471.987 31.1421 472.231C31.0406 472.474 30.9883 472.736 30.9883 473C30.9883 473.264 31.0406 473.525 31.1421 473.769C31.2436 474.013 31.3924 474.234 31.5799 474.42L41.5799 484.42C41.7658 484.607 41.987 484.756 42.2307 484.858C42.4744 484.959 42.7359 485.011 42.9999 485.011C43.2639 485.011 43.5253 484.959 43.769 484.858C44.0127 484.756 44.234 484.607 44.4199 484.42C44.6073 484.234 44.7561 484.013 44.8577 483.769C44.9592 483.525 45.0115 483.264 45.0115 483C45.0115 482.736 44.9592 482.474 44.8577 482.231C44.7561 481.987 44.6073 481.766 44.4199 481.58L35.8199 473L44.4199 464.42C44.6073 464.234 44.7561 464.013 44.8577 463.769C44.9592 463.525 45.0115 463.264 45.0115 463C45.0115 462.736 44.9592 462.474 44.8577 462.231C44.7561 461.987 44.6073 461.766 44.4199 461.58ZM66.4199 471.58L56.4199 461.58C56.2334 461.393 56.012 461.245 55.7684 461.145C55.5247 461.044 55.2636 460.992 54.9999 460.992C54.4673 460.992 53.9565 461.203 53.5799 461.58C53.3934 461.766 53.2455 461.988 53.1446 462.231C53.0436 462.475 52.9917 462.736 52.9917 463C52.9917 463.532 53.2033 464.043 53.5799 464.42L62.1799 473L53.5799 481.58C53.3924 481.766 53.2436 481.987 53.1421 482.231C53.0406 482.474 52.9883 482.736 52.9883 483C52.9883 483.264 53.0406 483.525 53.1421 483.769C53.2436 484.013 53.3924 484.234 53.5799 484.42C53.7658 484.607 53.987 484.756 54.2307 484.858C54.4744 484.959 54.7359 485.011 54.9999 485.011C55.2639 485.011 55.5253 484.959 55.769 484.858C56.0128 484.756 56.234 484.607 56.4199 484.42L66.4199 474.42C66.6073 474.234 66.7561 474.013 66.8577 473.769C66.9592 473.525 67.0115 473.264 67.0115 473C67.0115 472.736 66.9592 472.474 66.8577 472.231C66.7561 471.987 66.6073 471.766 66.4199 471.58Z"
            fill="#173265" />
        </svg> <!-- eslint-enable -->
      </ImgComparisonSlider>

      <!-- Top Centered Logo and Text -->
      <div class="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 text-center px-4">
        <img src="/images/logo.svg" alt="Logo" class="h-12 md:h-[72px] mx-auto mb-6 md:mb-[4rem]">
        <h2 class="text-white text-xl md:text-3xl mb-2 md:mb-3">Let’s Create Something</h2>
        <p class="text-white text-2xl md:text-5xl font-semibold">Beyond Your Expectation</p>
      </div>
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
  height: auto;

  .first-img,
  .second-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  svg {
    height: 100%;
    max-height: 100%;
    width: auto;
  }
}

@media (min-width: 768px) {
  .hero-slider {
    height: 100vh;

    .first-img,
    .second-img {
      height: 100vh;
    }

    svg {
      height: 100vh;
    }
  }
}
</style>