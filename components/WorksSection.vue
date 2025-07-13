<template>
  <div class="flex flex-col lg:flex-row items-center justify-center w-full max-w-[90vw] mx-auto gap-4 p-4 bg-white">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="relative transition-all duration-500 ease-in-out text-white cursor-pointer flex flex-col justify-between"
      :class="[
        activeCard === index ? 'w-full lg:w-[787px]' : 'w-full lg:w-[231px]',
        'shadow-lg overflow-hidden h-auto lg:h-[80vh]',
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
        <!-- Active Card Content -->
        <div
          v-if="activeCard === index"
          class="relative flex flex-1 flex-col justify-end px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 transition-opacity duration-500 opacity-100"
        >
          <!-- Bottom content row -->
          <div class="flex items-end justify-between w-full">
            <!-- Title & Description (Bottom-Left) -->
            <div class="text-left pb-16">
              <h2 class="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-2">
                {{ card.title }}
              </h2>
              <p class="text-sm sm:text-base lg:text-xl text-white/80 max-w-md">
                {{ card.description }}
              </p>
            </div>

            <!-- Navigation Icons (Bottom-Right) -->
            <div class="flex gap-4">
              <!-- Prev Icon -->
              <button
                class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#173265] text-black rounded hover:bg-white disabled:opacity-40 disabled:bg-[#F6F6F6]/60"
                :disabled="index === 0"
                @click.stop="goToPrev(index)"
              >
                <!-- Prev SVG -->
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 11H9.41L12.71 7.71C13.1 7.32 13.1 6.68 12.71 6.29C12.32 5.9 11.68 5.9 11.29 6.29L6.29 11.29C5.9 11.68 5.9 12.32 6.29 12.71L11.29 17.71C11.68 18.1 12.32 18.1 12.71 17.71C13.1 17.32 13.1 16.68 12.71 16.29L9.41 13H17C17.55 13 18 12.55 18 12C18 11.45 17.55 11 17 11Z"
                    fill="white"
                  />
                </svg>
              </button>

              <!-- Next Icon -->
              <button
                class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#173265] text-black rounded hover:bg-white disabled:opacity-40 disabled:bg-[#F6F6F6]/60"
                :disabled="index === cards.length - 1"
                @click.stop="goToNext(index)"
              >
                <!-- Next SVG -->
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 11H14.59L11.29 7.71C10.9 7.32 10.9 6.68 11.29 6.29C11.68 5.9 12.32 5.9 12.71 6.29L17.71 11.29C18.1 11.68 18.1 12.32 17.71 12.71L12.71 17.71C12.32 18.1 11.68 18.1 11.29 17.71C10.9 17.32 10.9 16.68 11.29 16.29L14.59 13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Inactive Card Title -->
        <div
          v-else
          class="relative h-[100px] md:h-full w-full flex items-end justify-center pb-4"
        >
          <div
  class="text-white font-semibold text-xl sm:text-2xl lg:text-[48px] absolute whitespace-nowrap 
             bottom-4 lg:bottom-auto lg:left-[30%] 
             transform lg:rotate-[-90deg] lg:origin-bottom-left"
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

const activeCard = ref<number>(0)

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
