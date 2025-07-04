<script setup>
import SectionTitle from './SectionTitle.vue'
// Data ini akan kita pindah ke backend nanti
const educationHistory = [
  {
    id: 1,
    period: '2022 - Sekarang',
    institution: 'Universitas Gadjah Mada',
    major: 'S1 - Teknik  Informatika',
  },
  { id: 2, period: '2019 - 2022', institution: 'SMA Negeri 1 Teladan Yogyakarta', major: 'MIPA' },
]
</script>
<template>
  <section id="pendidikan" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative">
        <div class="absolute h-full border-r-2 border-gray-300" style="left: 50%"></div>
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-8 flex justify-between items-center w-full"
        >
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray 600">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-blue-600 rounded-full z 10"></div>
            </div>
          </div>
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-blue-600 rounded-full z 10"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray 600">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
• Skills.vue Code snippet
<script setup>
import SectionTitle from './SectionTitle.vue'
const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' },
]
</script>
<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
