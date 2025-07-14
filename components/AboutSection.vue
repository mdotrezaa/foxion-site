<template>
  <section class="about-section pt-[2rem] md:pt-0 px-[1rem]">
      <div class="container">
        <div class="about-grid">
          <!-- Left Column -->
          <div class="about-text pt-0 md:pt-[2rem] px-[1rem]">
            <h2 class="font-semibold text-[24px] md:text-[36px] text-[#3D3D3D]">About Us</h2>
            <p class="text-[#5D5D5D]">
              Foxion Technologies is a technology innovation company that reimagines how organizations operate in a digital world.
              We build AI-powered and people-first systems that simplify complex workflows, automate decision-making, and scale
              with precision. From HR operations to industrial AI, our technology adapts to you, not the other way around.
            </p>
            <p class="text-[#5D5D5D]">
              Our fully customizable solutions combine cutting-edge in-house AI development with deep business understanding
              to deliver results that go beyond your expectations.
            </p>
          </div>

          <!-- Right Column -->
          <div class="about-trust pt-0 md:pt-[2rem] px-[1rem]">
            <h3 class="font-semibold text-[20px] md:text-[32px] text-[#3D3D3D]">Trusted by</h3>
            <h2 class="font-semibold text-[24px] md:text-[36px] text-[#3D3D3D] mb-4">30+ Companies</h2>
            <div class="logo-grid">
              <img src="/images/national-geographic.png" alt="National Geographic" >
              <img src="/images/radikari.png" alt="Radikari" >
              <img src="/images/brin.png" alt="BRIN" >
              <img src="/images/samudera.png" alt="Samudera" >
              <img src="/images/gojekk.png" alt="Gojek" >
              <img src="/images/dana.png" alt="DANA" >
              <img src="/images/foresthree.png" alt="Foresthree Coffee" >
              <img src="/images/stafbook.png" alt="Stafbook" >
            </div>
            <p class="text-gray-500 my-[2rem]">and more...</p>
          </div>
        </div>
      </div>

      <div class="grid  gap-6 border-t border-gray-200 pt-8 px-4 md:grid-cols-4 grid-cols-2">
        <div v-for="(n,idx) in indexs" :key="idx" class="text-center">
          <h2 class="text-[2.5rem] text-[#1f2c56] mb-2 font-bold">{{n.title}}</h2>
          <p class="text-gray-600">{{n.description}}</p>
        </div>
      </div>
    </section>
</template>


<script setup>

const indexs = [
  {
    title: '50+',
    description:
      'Projects Delivered',
  },
  {
    title: '10+',
    description:
      'In-House Product',
  },
  {
    title: '10+',
    description:
      'Team Member',
  },
  {
    title: '300',
    description:
      'Industry Handled',
  },
]
</script>

<style lang="scss">
.about-section {
  background: #fff;
  font-family: sans-serif;

  .container {
    max-width: 1200px;
    margin: auto;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    > div:first-child {
      padding-bottom: 2rem;
      border-right: 1px solid #ddd;
    }

    > div:last-child {
      padding-left: 2rem;
    }
  }

  .about-text h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .about-text p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .about-trust h3 {
    color: #555;
    margin: 0;
  }

  .logo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    border-top: 1px solid #ddd;
    padding-top: 2rem;
  }

  .stat-item {
    text-align: center;
    flex: 1 1 150px;

    h2 {
      color: #1f2c56;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
    }
  }

  // 🔽 Responsive Styles
  @media (max-width: 1024px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 0rem;

      > div:first-child {
        border-right: none;
        padding-right: 0;
      }

      > div:last-child {
        padding-left: 0;
      }
    }

    .logo-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 640px) {
    .logo-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .about-text h2 {
      font-size: 1.5rem;
    }

    .stat-item h2 {
      font-size: 2rem;
    }
  }
}
</style>