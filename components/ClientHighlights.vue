<template>
  <section class="relative text-white px-3 md:px-10 py-16">
    <!-- Background Image -->
    <div
      class="absolute inset-0 z-0 bg-cover bg-center"
      style="background-image: url('/images/testimonials/bg-testi.png')"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 z-0 bg-[#184980E5]"/>

    <!-- Content -->
    <div class="relative z-10 !max-w-none md:!max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Quotes -->
      <div>
        <h2 class="text-[36px] font-bold mb-6">Client & Company Highlights</h2>
        <p class="mb-10 text-[20px] text-gray-200 max-w-xl">
          We’ve helped companies reduce processing time by 60%, automate compliance workflows, and scale people ops across multiple sites.
        </p>
<div class="grid md:hidden grid-cols-2 gap-4">
        <div class="flex flex-col gap-5 mt-5">
            <img src="/images/testimonials/user-1.png" alt="user 1" class="grayscale object-cover h-[400px] w-full" >
            <img src="/images/testimonials/user-3.png" alt="user 3" class="grayscale object-cover h-[250px] w-full" >
        </div>
        <div class="flex flex-col gap-5">
            <img src="/images/testimonials/user-2.png" alt="user 2" class="grayscale object-cover h-[300px] w-full" >
            <img src="/images/testimonials/user-4.png" alt="user 4" class="grayscale object-cover h-[350px] w-full" >
        </div>
      </div>
        <!-- Testimonial 1 -->
        <div class="mb-12 mt-4 md:mt-0 pl-0 md:pl-[5rem] relative">
					<img src="/images/quoteIcon.svg" alt="user 1" class="w-[148px] absolute -top-20 -left-10 text-white/10 select-none" >
          <p class="text-[16px] md:text-[32px] font-semibold z-10 relative">
            The AI OCR and reporting dashboard helped us cut our contract processing time by 60%
          </p>
          <hr class="my-3 border-white/20 w-full" >
          <p class="text-[12px] md:text-[20px] text-white/80">Legal Ops Director, National Agency</p>
        </div>

        <!-- Testimonial 2 -->
        <div class="relative">
          <p class="text-[24px] md:text-[32px] font-semibold z-10 relative">
            FoxOps automated our attendance and payroll across regions. It just works.
          </p>
          <hr class="my-3 border-white/20 w-full" >
          <p class="text-[16px] md:text-[20px] text-white/80">HR Manager, Manufacturing Sector</p>
        </div>
      </div>

      <!-- Right: Images -->
      <div class="hidden md:grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-5 mt-5">
            <img src="/images/testimonials/user-1.png" alt="user 1" class="grayscale object-cover h-[400px] w-full" >
            <img src="/images/testimonials/user-3.png" alt="user 3" class="grayscale object-cover h-[250px] w-full" >
        </div>
        <div class="flex flex-col gap-5">
            <img src="/images/testimonials/user-2.png" alt="user 2" class="grayscale object-cover h-[300px] w-full" >
            <img src="/images/testimonials/user-4.png" alt="user 4" class="grayscale object-cover h-[350px] w-full" >
        </div>
      </div>
    </div>
  </section>
</template>
