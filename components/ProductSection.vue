<template>
  <section class="px-6 py-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Product Highlights</h2>
      <p class="text-gray-600 mb-8">
        Over the years, we have developed a lot of products. Here are some of our flagship products that loved the most by our clients.
      </p>

      <div class="h-1 w-[120px] md:w-[510px] bg-[#173265] mb-10"></div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="relative group h-[350px] overflow-hidden transition-all duration-300"
        >
          <!-- Image -->
          <img
            :src="product.image"
            alt="Product image"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-100"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>

          <!-- Title & Description on overlay -->
          <div
            class="absolute bottom-0 w-full p-4 z-10 bg-white group-hover:bg-transparent transition-all duration-300"
          >
            <h3 class="text-lg font-bold group-hover:text-white mb-1">{{ product.title }}</h3>
            <p class="text-sm group-hover:text-gray-200">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    title: 'Foxion Ops',
    description: 'Smart People Operations (Attendance, Payroll, Scheduling)',
    image: '/images/products/product-1.png'
  },
  {
    title: 'Foxion Flow',
    description: 'AI-Powered Workflow Dashboards',
    image: '/images/products/product-2.png'
  },
  {
    title: 'Fox Vision',
    description: 'Real-Time Visual AI for surveillance, production, and logistics',
    image: '/images/products/product-3.png'
  },
  {
    title: 'AI Event Check-in',
    description: 'Face Recognition Attendance',
    image: '/images/products/product-4.png'
  },
  {
    title: 'Smart Warehouse Management',
    description: 'AI Based Warehouse System',
    image: '/images/products/product-5.png'
  },
  {
    title: 'Contract & Document Automation',
    description: 'NLP-Based Automation',
    image: '/images/products/product-6.png'
  },
  {
    title: 'OCR, PPE, LPR',
    description: 'AI-Based Object Scanning',
    image: '/images/products/product-7.png'
  },
  {
    title: 'Fatigue Detection Systems',
    description: 'AI-Based Fatigue Detection System',
    image: '/images/products/product-8.png'
  }
]
</script>
