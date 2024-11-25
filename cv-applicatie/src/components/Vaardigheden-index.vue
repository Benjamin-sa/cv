<template>
  <div class="min-h-screen bg-white overflow-y-auto py-8">
    <div class="container mx-auto px-4 md:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
          Vaardigheden & Expertise
        </h2>
        <p class="text-gray-600">
          Een overzicht van mijn technische vaardigheden en expertise gebieden
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Technical Skills -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-6">
            <i class="fas fa-code mr-2 text-blue-500"></i>
            Technische Vaardigheden
          </h3>
          <div class="space-y-6">
            <div v-for="(skill, index) in technicalSkills" :key="index">
              <div class="flex justify-between mb-2">
                <span class="text-gray-700 font-medium">{{ skill.name }}</span>
                <span class="text-gray-500">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div 
                  class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-6">
            <i class="fas fa-brain mr-2 text-purple-500"></i>
            Soft Skills
          </h3>
          <div class="space-y-4">
            <div 
              v-for="(skill, index) in softSkills" 
              :key="index"
              class="flex items-center bg-gray-50 rounded-lg p-4"
            >
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-400 mr-4">
                <i :class="skill.icon" class="text-white"></i>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">{{ skill.name }}</h4>
                <p class="text-sm text-gray-600">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-6 text-center">
          <i class="fas fa-plus-circle mr-2 text-green-500"></i>
          Aanvullende Vaardigheden
        </h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span 
            v-for="(skill, index) in additionalSkills" 
            :key="index"
            class="px-4 py-2 bg-gray-50 text-gray-700 rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-300"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaardighedenIndex',
  data() {
    return {
      technicalSkills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 }
      ],
      softSkills: [
        {
          name: 'Communicatie',
          description: 'Effectief in zowel geschreven als mondelinge communicatie',
          icon: 'fas fa-comments'
        },
        {
          name: 'Teamwork',
          description: 'Sterke samenwerkingsvaardigheden en teamspirit',
          icon: 'fas fa-users'
        },
        {
          name: 'Probleemoplossend denken',
          description: 'Analytisch en creatief in het vinden van oplossingen',
          icon: 'fas fa-lightbulb'
        },
        {
          name: 'Projectmanagement',
          description: 'Ervaring met planning en uitvoering van projecten',
          icon: 'fas fa-tasks'
        }
      ],
      additionalSkills: [
        'Git',
        'Docker',
        'REST APIs',
        'SQL',
        'Agile/Scrum',
        'UI/UX Design',
        'Testing',
        'CI/CD'
      ]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>