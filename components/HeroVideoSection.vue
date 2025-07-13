<template>
  <section class="relative w-full h-[500px] overflow-hidden">
    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="/videos/foxion.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#184980BF] z-10"></div>

    <!-- Content -->
    <div class="relative z-20 flex flex-col items-start justify-center h-full px-6 max-w-5xl mx-auto text-white">
      <h1 class="text-[48px] md:text-4xl font-bold mb-4">Ready To Take Your Idea To The Next Level?</h1>
      <p class="text-[36px] md:text-xl mb-6">Faster, smarter, and simpler.</p>
        <a href="mailto:brilliant@foxion.id" class="cta-button w-full md:w-[240px] text-center">
          Let's Collaborate
        </a>
    </div>
  </section>
</template>
<style lang="scss">
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
</style>