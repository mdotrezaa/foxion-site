<template>
  <div class="how-we-work-timeline pt-[4rem] px-[8rem]">
    <!-- Header -->
    <div class="px-10 mb-8">
      <h2 class="text-white text-[2rem] font-semibold">
        How We Help You To Reach Your Goals
      </h2>
      <h3 class="text-white text-[1.1rem]">
        Whether you're a government agency, a logistics company, a maritime operator, or a SaaS platform, our modular technology adapts to your unique workflows. We collaborate through:
      </h3>
    </div>

    <!-- Steps with scroll snap -->
    <div class="step-wrapper" ref="stepWrapper">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step"
        :class="{
          active: index === activeIndex,
          next: index === activeIndex + 1
        }"
      >
        <div class="timeline">
          <!-- Vertical line between diamonds -->
          <div class="connector-line"></div>

          <!-- Diamond -->
          <div class="diamond">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
        </div>

        <!-- Content section -->
        <div class="content">
          <div class="text">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
          <div class="image">
            <img :src="step.image" :alt="step.title" />
          </div>
        </div>
      </div>

      <!-- Final slide -->
      <div class="slide">
        <h2 class="text-[72px] text-center font-bold">
          Let's turn your goals into milestones
        </h2>
        <p class="text-[48px] text-center">
          Faster, smarter, and simpler.
        </p>
        <a href="mailto:brilliant@foxion.id" class="cta-button">
          Let's Collaborate
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const steps = [
  {
    title: 'Requirement Discovery',
    description:
      'We begin by understanding your business goals, technical needs, and pain points through collaborative workshops and detailed analysis.',
    image: '/images/how-we-work/step-1.png',
  },
  {
    title: 'Prototyping & Customization',
    description:
      'We translate ideas into functional prototypes and tailor every feature to match your workflow, branding, and user expectations.',
    image: '/images/how-we-work/step-2.png',
  },
  {
    title: 'Deployment & Integration',
    description:
      'Our team ensures a smooth rollout, integrating seamlessly with your existing systems while maintaining performance and security.',
    image: '/images/how-we-work/step-3.png',
  },
  {
    title: 'Data-Driven Iteration',
    description:
      'Post-launch, we collect real usage data to identify improvements, enabling continuous refinement and smarter decision-making.',
    image: '/images/how-we-work/step-4.png',
  },
]

const activeIndex = ref(0)
const stepWrapper = ref(null)

const handleScroll = () => {
  const stepEls = stepWrapper.value.querySelectorAll('.step')
  let closestIndex = 0
  let closestDistance = Infinity

  stepEls.forEach((el, index) => {
    const rect = el.getBoundingClientRect()
    const center = window.innerHeight / 2
    const distance = Math.abs(rect.top + rect.height / 2 - center)

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  activeIndex.value = closestIndex
}

onMounted(() => {
  stepWrapper.value.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  stepWrapper.value?.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.how-we-work-timeline {
  background-color: #15407a;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .step-wrapper {
    flex-grow: 1;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    height: 100%;
    position: relative;
  }

  .step {
    scroll-snap-align: center;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    opacity: 0.2;
    transition: opacity 0.5s ease;

    &.active {
      opacity: 1;
			h3 {
          font-size: 3rem!important;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.5rem!important;
          line-height: 1.6;
          color: #d1dbee;
        }
    }

    &.next {
      opacity: 0.4;
    }

    .timeline {
      position: absolute;
      left: 3rem;
      top: 0;
      bottom: 0;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .connector-line {
        position: absolute;
        top: 40px; // just below diamond
        bottom: 0;
        left: 50%;
        width: 1px;
        background: #fff;
        transform: translateX(-50%);
        z-index: 0;
				height: 100%;
      }

      .diamond {
        z-index: 1;
        width: 80px;
        height: 80px;
        background: #fff;
        color: #15407a;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(45deg);
        font-weight: bold;
        font-size: 2rem;
        position: relative;

        span {
          transform: rotate(-45deg);
        }
      }
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: auto;
      z-index: 1;
      gap: 2rem;
      padding-left: 6rem;

      .text {
        flex: 1;
				h3, p {
					transition: font-size 0.5s ease;
				}
        h3 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #d1dbee;
        }
      }

      .image img {
        max-width: 400px;
        border-radius: 8px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      }
    }
  }

  .slide {
    scroll-snap-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #15407a;
    color: white;
    text-align: center;
    padding: 4rem 2rem;

    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .cta-button {
      padding: 1rem 2.5rem;
      background-color: #173265;
      color: #fff;
      font-weight: bold;
      font-size: 1.25rem;
      transition: background 0.3s ease;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #e2e8f0;
        color: #173265;
      }
    }
  }
}
</style>
