<script setup>
import ProfileGallery from './components/ProfileGallery.vue'
</script>

<template>
  <div class="app-container">
    <h1>Profile Gallery</h1>

    <!-- ProfileGallery component in action -->
    <ProfileGallery :profiles="profileData" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    ProfileGallery
  },
  data() {
    return {
      profileData: [
        { id: 1, name: "Ana Reyes", email: "ana.reyes@example.com" },
        { id: 2, name: "Juan dela Cruz", email: "juan.delacruz@example.com" },
        { id: 3, name: "Maria Santos", email: "maria.santos@example.com" },
        { id: 4, name: "Gwyn Lee", email: "gwyn.lee@example.com" },
        { id: 5, name: "Jay Son", email: "jay.son@example.com" },
        { id: 6, name: "Greggy Lee", email: "greggy.lee@example.com" },
        { id: 7, name: "Lily Cruz", email: "lily.cruz@example.com" },
        { id: 8, name: "Jan Erick", email: "jan.erick@example.com" },
        { id: 9, name: "Keen Potter", email: "keen.potter@example.com" },
        { id: 10, name: "Mari Bell", email: "mari.bell@example.com" }
      ]
    }
  }
}
</script>

<style scoped>
.app-container {
  width: 100%;
  margin: 0;
  padding: 16px 12px;
  border: 8px solid #ffffff;
}

h1 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.2;
}

/* Tablet: Larger padding and typography at 768px and above */
@media (min-width: 768px) {
  .app-container {
    padding: 24px 20px;
    border: 10px solid #ffffff;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
    letter-spacing: 1.5px;
  }
}

/* Desktop: Full scaling at 1280px and above */
@media (min-width: 1280px) {
  .app-container {
    padding: 32px 24px;
    border: 12px solid #ffffff;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 24px;
    letter-spacing: 2px;
  }
}
</style>