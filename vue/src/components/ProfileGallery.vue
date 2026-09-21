<template>
  <div class="profile-gallery">
    <!-- Empty state -->
    <div v-if="profiles.length === 0" class="empty-state">
      <div class="empty-icon">📋</div>
      <h2 class="empty-title">No Profiles Found</h2>
      <p class="empty-message">
        There are no profiles to display. Try adjusting your filters or add new profiles to get started.
      </p>
    </div>

    <!-- Gallery grid -->
    <div v-else class="gallery-grid">
      <ProfileCard
        v-for="profile in profiles"
        :key="profile.id"
        :name="profile.name"
        :email="profile.email"
      />
    </div>
  </div>
</template>

<script>
import ProfileCard from './ProfileCard.vue'

export default {
  name: 'ProfileGallery',
  components: {
    ProfileCard
  },
  props: {
    profiles: {
      type: Array,
      required: true,
      validator: (arr) => {
        return arr.every(item => 
          typeof item.id !== 'undefined' && 
          typeof item.name === 'string' && 
          typeof item.email === 'string'
        )
      }
    }
  }
}
</script>

<style scoped>
.profile-gallery {
  width: 100%;
}

/* Mobile-first: Base styles for small screens (~360px) */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 8px;
}

/* Empty state styling */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: #666;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-title {
  margin: 0 0 12px 0;
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.empty-message {
  margin: 0;
  max-width: 400px;
  font-size: 16px;
  line-height: 1.6;
  color: #888;
}

/* Tablet: 2 columns at 768px and above */
@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 12px;
  }
}

/* Desktop: 3+ columns at 1280px and above */
@media (min-width: 1280px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 16px;
  }
}

/* Large desktop: 4 columns at 1600px and above */
@media (min-width: 1600px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 16px;
  }
}
</style>