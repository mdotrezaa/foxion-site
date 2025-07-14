<template>
  <section
    class="min-h-[calc(100vh-70px)] bg-[#173265]  overflow-hidden lg:max-h-[1084px] xl:h-screen xl:max-h-screen xl:overflow-hidden relative">
    <div class="relative h-full">
      <div class="relative md:absolute z-50 top-0 md:top-20  overflow-x-hidden inset-x-0 h-screen pointer-events-none">
        <div class="flex flex-col justify-center text-center">
          <img src="/images/logo.svg" alt="Logo" class="h-12 md:h-[72px] mx-auto mb-6 md:mb-[4rem]">

          <h2 class="text-white text-[24px] font-normal md:text-3xl mb-2 md:mb-3">Let’s Create Something</h2>
          <p class="text-white text-[48px] px-5 md:text-5xl font-semibold">Beyond Your Expectation</p>
        </div>
      </div>
      <div class="absolute top-0 overflow-x-hidden inset-x-0 h-screen pointer-events-none">
        <img class="absolute z-10 top-0 left-[-4rem] md:left-0 h-full lg:h-full" src="/images/pattern1.svg">
        <img class="absolute z-10 bottom-0 right-[-4rem] md:right-0 h-full lg:h-full" src="/images/pattern2.svg">
      </div>
      <div
        class="halfscreen-height relative md:absolute top-0 !bottom-0 !w-full !h-full md:!h-screen md:max-h-[1084px] lg:h-screen">

        <img-comparison-slider class="absolute bottom-[-4rem] right-0 left-0" :value="95">
            <div slot="second" class="relative h-full md:h-screen w-full">
              <div class="absolute h-full md:h-screen inset-0 bg-[#173265] z-0" />
              <img v-if="isMobile" class="relative left-0 right-0 bottom-0 h-full w-full mx-auto"
                src="/images/after2-mobile.svg" alt="After Image Mobile">
              <img v-else
                class="relative md:absolute left-0 right-0 bottom-0 h-full md:h-[70vh] w-full md:w-[80%] mx-auto"
                src="/images/after2.svg" alt="After Image Desktop">
            </div>

            <div  slot="first" class="relative h-full md:h-screen w-full">
              <div class="absolute h-full md:h-screen inset-0 bg-[#173265] z-0" />
              <img v-if="isMobile" class="relative left-0 right-0 bottom-0 h-full w-full mx-auto"
                src="/images/before2-mobile.svg" alt="Before Image Mobile">
              <img v-else
                class="relative md:absolute left-0 right-0 bottom-0 h-full md:h-[70vh] w-full md:w-[80%] mx-auto"
                src="/images/before2.svg" alt="Before Image Desktop">
            </div>

            <svg v-if="isMobile" slot="handle" width="48" height="525" viewBox="0 0 48 525" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line x1="23.7334" y1="8.74228e-08" x2="23.7334" y2="525" stroke="white" stroke-width="4" />
              <path d="M23.666 204.784L47.3321 228.45L23.666 252.116L0 228.45L23.666 204.784Z" fill="white" />
              <path
                d="M21.454 222.935C21.3642 222.844 21.2574 222.772 21.1397 222.723C21.0219 222.674 20.8957 222.649 20.7682 222.649C20.6406 222.649 20.5144 222.674 20.3967 222.723C20.279 222.772 20.1721 222.844 20.0823 222.935L15.2525 227.765C15.162 227.855 15.0901 227.961 15.0411 228.079C14.992 228.197 14.9668 228.323 14.9668 228.451C14.9668 228.578 14.992 228.704 15.0411 228.822C15.0901 228.94 15.162 229.047 15.2525 229.136L20.0823 233.966C20.1721 234.057 20.279 234.129 20.3967 234.178C20.5144 234.227 20.6406 234.252 20.7682 234.252C20.8957 234.252 21.0219 234.227 21.1397 234.178C21.2574 234.129 21.3642 234.057 21.454 233.966C21.5445 233.876 21.6164 233.77 21.6654 233.652C21.7145 233.534 21.7397 233.408 21.7397 233.28C21.7397 233.153 21.7145 233.027 21.6654 232.909C21.6164 232.791 21.5445 232.684 21.454 232.595L17.3004 228.451L21.454 224.307C21.5445 224.217 21.6164 224.11 21.6654 223.992C21.7145 223.875 21.7397 223.748 21.7397 223.621C21.7397 223.493 21.7145 223.367 21.6654 223.249C21.6164 223.132 21.5445 223.025 21.454 222.935ZM32.0796 227.765L27.2498 222.935C27.1597 222.845 27.0528 222.773 26.9351 222.725C26.8174 222.676 26.6913 222.651 26.5639 222.651C26.3067 222.651 26.06 222.753 25.8781 222.935C25.788 223.025 25.7166 223.132 25.6678 223.25C25.6191 223.367 25.594 223.493 25.594 223.621C25.594 223.878 25.6962 224.125 25.8781 224.307L30.0317 228.451L25.8781 232.595C25.7876 232.684 25.7157 232.791 25.6667 232.909C25.6176 233.027 25.5924 233.153 25.5924 233.28C25.5924 233.408 25.6176 233.534 25.6667 233.652C25.7157 233.77 25.7876 233.876 25.8781 233.966C25.9679 234.057 26.0747 234.129 26.1924 234.178C26.3102 234.227 26.4364 234.252 26.5639 234.252C26.6915 234.252 26.8177 234.227 26.9354 234.178C27.0531 234.129 27.16 234.057 27.2498 233.966L32.0796 229.136C32.1701 229.047 32.242 228.94 32.291 228.822C32.3401 228.704 32.3653 228.578 32.3653 228.451C32.3653 228.323 32.3401 228.197 32.291 228.079C32.242 227.961 32.1701 227.855 32.0796 227.765Z"
                fill="#173265" />
            </svg>
            <svg v-else  slot="handle" width="98" height="1080" viewBox="0 0 98 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="49" y1="1.74846e-07" x2="49" y2="1087" stroke="white" stroke-width="8" />
              <path d="M49 424L98 473L49 522L0 473L49 424Z" fill="white" />
              <path
                d="M44.4199 461.58C44.234 461.392 44.0127 461.244 43.769 461.142C43.5253 461.041 43.2639 460.988 42.9999 460.988C42.7359 460.988 42.4744 461.041 42.2307 461.142C41.987 461.244 41.7658 461.392 41.5799 461.58L31.5799 471.58C31.3924 471.766 31.2436 471.987 31.1421 472.231C31.0406 472.474 30.9883 472.736 30.9883 473C30.9883 473.264 31.0406 473.525 31.1421 473.769C31.2436 474.013 31.3924 474.234 31.5799 474.42L41.5799 484.42C41.7658 484.607 41.987 484.756 42.2307 484.858C42.4744 484.959 42.7359 485.011 42.9999 485.011C43.2639 485.011 43.5253 484.959 43.769 484.858C44.0127 484.756 44.234 484.607 44.4199 484.42C44.6073 484.234 44.7561 484.013 44.8577 483.769C44.9592 483.525 45.0115 483.264 45.0115 483C45.0115 482.736 44.9592 482.474 44.8577 482.231C44.7561 481.987 44.6073 481.766 44.4199 481.58L35.8199 473L44.4199 464.42C44.6073 464.234 44.7561 464.013 44.8577 463.769C44.9592 463.525 45.0115 463.264 45.0115 463C45.0115 462.736 44.9592 462.474 44.8577 462.231C44.7561 461.987 44.6073 461.766 44.4199 461.58ZM66.4199 471.58L56.4199 461.58C56.2334 461.393 56.012 461.245 55.7684 461.145C55.5247 461.044 55.2636 460.992 54.9999 460.992C54.4673 460.992 53.9565 461.203 53.5799 461.58C53.3934 461.766 53.2455 461.988 53.1446 462.231C53.0436 462.475 52.9917 462.736 52.9917 463C52.9917 463.532 53.2033 464.043 53.5799 464.42L62.1799 473L53.5799 481.58C53.3924 481.766 53.2436 481.987 53.1421 482.231C53.0406 482.474 52.9883 482.736 52.9883 483C52.9883 483.264 53.0406 483.525 53.1421 483.769C53.2436 484.013 53.3924 484.234 53.5799 484.42C53.7658 484.607 53.987 484.756 54.2307 484.858C54.4744 484.959 54.7359 485.011 54.9999 485.011C55.2639 485.011 55.5253 484.959 55.769 484.858C56.0128 484.756 56.234 484.607 56.4199 484.42L66.4199 474.42C66.6073 474.234 66.7561 474.013 66.8577 473.769C66.9592 473.525 67.0115 473.264 67.0115 473C67.0115 472.736 66.9592 472.474 66.8577 472.231C66.7561 471.987 66.6073 471.766 66.4199 471.58Z"
                fill="#173265" />
            </svg>

        </img-comparison-slider>
      </div>

    </div>
  </section>
</template>


<script setup>
const isMobile = ref(false)

const updateDeviceType = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  updateDeviceType()
  window.addEventListener('resize', updateDeviceType)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateDeviceType)
})
</script>

<style lang="scss">
.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1280px;
}


@media (min-width: 768px) {
  .halfscreen-height {
    height: calc(50vh - 35px);
    height: calc(50svh - 35px);
  }

  .half-height {
    height: calc(50vh - 35px);
    height: 100vh;
  }
}
</style>