<template>
  <div class="flex flex-col sm:flex-row h-screen items-center justify-center !w-[80vw] m-auto gap-2 p-4 bg-white">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="relative transition-all duration-500 ease-in-out text-white cursor-pointer flex flex-col justify-between"
      :class="[
        activeCard === index ? 'w-full sm:w-[787px]' : 'hidden sm:block sm:w-[231px]',
        'shadow-lg overflow-hidden h-[80vh]',
      ]"
      @click="activeCard !== index && toggleCard(index)"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        :style="{ backgroundImage: `url(${card.image})`, opacity: activeCard === index ? 1 : 0.4 }"
      />

      <!-- Colored Overlay -->
      <div
        class="absolute inset-0 transition-colors duration-500"
        :class="activeCard === index ? 'bg-[#000000B2]' : 'bg-[#184980BF]'"
      />

      <!-- Content -->
      <div class="relative z-10 w-full h-full flex m-auto flex-col">
        <div
          v-if="activeCard === index"
          class="relative flex flex-1 flex-col justify-end px-8 pb-8 transition-opacity duration-500 opacity-100"
        >
          <!-- Bottom content row -->
          <div class="flex items-end justify-between w-full">
            <!-- Title & Description -->
            <div class="text-left pb-[6rem]">
              <h2 class="text-5xl font-semibold mb-2">{{ card.title }}</h2>
              <p class="text-xl text-white/80 max-w-md">{{ card.description }}</p>
            </div>

            <!-- Navigation -->
            <div class="flex gap-4">
              <!-- Prev Button -->
              <button
                class="w-10 h-10 flex items-center justify-center bg-[#173265] text-black rounded hover:bg-white disabled:opacity-40 disabled:bg-[#F6F6F6]/60"
                :disabled="index === 0"
                @click.stop="goToPrev(index)"
              >
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M16.9999 11.0002H9.4099L12.7099 7.71019C12.8982 7.52188 13.004 7.26649 13.004 7.00019C13.004 6.73388 12.8982 6.47849 12.7099 6.29019C12.5216 6.10188 12.2662 5.99609 11.9999 5.99609C11.7336 5.99609 11.4782 6.10188 11.2899 6.29019L6.2899 11.2902C6.19886 11.3853 6.12749 11.4974 6.0799 11.6202C5.97988 11.8636 5.97988 12.1367 6.0799 12.3802C6.12749 12.5029 6.19886 12.6151 6.2899 12.7102L11.2899 17.7102C11.3829 17.8039 11.4935 17.8783 11.6153 17.9291C11.7372 17.9798 11.8679 18.006 11.9999 18.006C12.1319 18.006 12.2626 17.9798 12.3845 17.9291C12.5063 17.8783 12.6169 17.8039 12.7099 17.7102C12.8036 17.6172 12.878 17.5066 12.9288 17.3848C12.9796 17.2629 13.0057 17.1322 13.0057 17.0002C13.0057 16.8682 12.9796 16.7375 12.9288 16.6156C12.878 16.4937 12.8036 16.3831 12.7099 16.2902L9.4099 13.0002H16.9999C17.2651 13.0002 17.5195 12.8948 17.707 12.7073C17.8945 12.5198 17.9999 12.2654 17.9999 12.0002C17.9999 11.735 17.8945 11.4806 17.707 11.2931C17.5195 11.1055 17.2651 11.0002 16.9999 11.0002Z"/>
                </svg>
              </button>

              <!-- Next Button -->
              <button
                class="w-10 h-10 flex items-center justify-center bg-[#173265] text-black rounded hover:bg-white disabled:opacity-40 disabled:bg-[#F6F6F6]/60"
                :disabled="index === cards.length - 1"
                @click.stop="goToNext(index)"
              >
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M17.92 11.6202C17.8724 11.4974 17.801 11.3853 17.71 11.2902L12.71 6.29019C12.6168 6.19695 12.5061 6.12299 12.3842 6.07253C12.2624 6.02207 12.1319 5.99609 12 5.99609C11.7337 5.99609 11.4783 6.10188 11.29 6.29019C11.1968 6.38342 11.1228 6.49411 11.0723 6.61594C11.0219 6.73776 10.9959 6.86833 10.9959 7.00019C10.9959 7.26649 11.1017 7.52188 11.29 7.71019L14.59 11.0002H7C6.73478 11.0002 6.48043 11.1055 6.29289 11.2931C6.10536 11.4806 6 11.735 6 12.0002C6 12.2654 6.10536 12.5198 6.29289 12.7073C6.48043 12.8948 6.73478 13.0002 7 13.0002H14.59L11.29 16.2902C11.1963 16.3831 11.1219 16.4937 11.0711 16.6156C11.0203 16.7375 10.9942 16.8682 10.9942 17.0002C10.9942 17.1322 11.0203 17.2629 11.0711 17.3848C11.1219 17.5066 11.1963 17.6172 11.29 17.7102C11.383 17.8039 11.4936 17.8783 11.6154 17.9291C11.7373 17.9798 11.868 18.006 12 18.006C12.132 18.006 12.2627 17.9798 12.3846 17.9291C12.5064 17.8783 12.617 17.8039 12.71 17.7102L17.71 12.7102C17.801 12.6151 17.8724 12.5029 17.92 12.3802C18.02 12.1367 18.02 11.8636 17.92 11.6202Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          v-else
          class="relative h-full w-full flex items-end justify-center pb-4"
        >
          <div
            class="text-white font-semibold text-[36px] transform rotate-[-90deg] absolute left-[40%] origin-bottom-left whitespace-nowrap"
            style="transform: rotate(-90deg) translateY(100%); transform-origin: bottom left;"
          >
            {{ card.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = ref([
  {
    title: 'Maritime & Port Operations',
    image: '/images/card1.png',
    description: 'License Plate & Cargo OCR, Security Monitoring',
  },
  {
    title: 'Energy',
    image: '/images/card2.png',
    description: 'PPE Detection, Fatigue Monitoring, Predictive Maintenance',
  },
  {
    title: 'SaaS',
    image: '/images/card3.png',
    description: 'Custom AI Dashboards, API-first People Ops Modules',
  },
  {
    title: 'Agriculture',
    image: '/images/card4.png',
    description: 'Smart Scheduling, Workforce Management, AI Crop Ops',
  },
])

const activeCard = ref(0)

function toggleCard(index: number) {
  activeCard.value = index
}

function goToNext(currentIndex: number) {
  if (currentIndex < cards.value.length - 1) {
    activeCard.value = currentIndex + 1
  }
}

function goToPrev(currentIndex: number) {
  if (currentIndex > 0) {
    activeCard.value = currentIndex - 1
  }
}
</script>
