<template>
  <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <!-- Left Column -->
          <div class="about-text">
            <h2 class="font-semibold text-[#3D3D3D]">About Us</h2>
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
          <div class="about-trust">
            <h3 class="font-semibold text-[#3D3D3D]">Trusted by</h3>
            <h2 class="font-semibold text-[#3D3D3D]">30+ Companies</h2>
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
            <p class="text-gray-500">and more...</p>
          </div>
        </div>
      </div>

      <div class="stats">
        <div v-for="n in 4" :key="n" class="stat-item pb-4">
          <h2>300</h2>
          <p>Projects</p>
        </div>
      </div>
    </section>
</template>


<script>
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
    padding-right: 2rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-right: 1px solid #ddd;
  }

  > div:last-child {
    padding-top: 4rem;
    padding-bottom: 4rem;
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

  .about-trust h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
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
    justify-content: space-around;
    border-top: 1px solid #ddd;
    padding-top: 2rem;
  }

  .stat-item {
    text-align: center;

    h2 {
      color: #1f2c56;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
    }
  }
}

</style>