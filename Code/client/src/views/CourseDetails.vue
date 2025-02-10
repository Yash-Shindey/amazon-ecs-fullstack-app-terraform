<template>
  <div class="course-details-container" v-if="course">
    <div class="course-header">
      <div class="header-content">
        <b-badge :variant="getLevelVariant(course.level)" class="level-badge">
          {{ course.level }}
        </b-badge>
        <h1 class="course-title">{{ course.title }}</h1>
        <p class="course-description">{{ course.description }}</p>
        <div class="course-meta">
          <span class="duration">
            <i class="far fa-clock"></i>
            {{ course.duration }}
          </span>
        </div>
      </div>
      <div class="header-image">
        <img :src="course.image" :alt="course.title">
      </div>
    </div>

    <div class="course-content">
      <div class="main-content">
        <div class="section-card">
          <h2>What You'll Learn</h2>
          <ul class="learning-outcomes">
            <li><i class="fas fa-check"></i> Understand core concepts and best practices</li>
            <li><i class="fas fa-check"></i> Build real-world projects</li>
            <li><i class="fas fa-check"></i> Master industry-standard tools</li>
            <li><i class="fas fa-check"></i> Deploy and scale applications</li>
          </ul>
        </div>

        <div class="section-card">
          <h2>Course Curriculum</h2>
          <div class="curriculum-section" v-for="(section, index) in curriculum" :key="index">
            <div class="section-header">
              <h3>{{ section.title }}</h3>
              <span class="section-duration">{{ section.duration }}</span>
            </div>
            <ul class="section-lessons">
              <li v-for="(lesson, idx) in section.lessons" :key="idx">
                <i class="fas fa-play-circle"></i>
                <span>{{ lesson }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="sidebar">
        <div class="progress-card">
          <h3>Course Progress</h3>
          <div class="progress-circle">
            <div class="progress-text">0%</div>
          </div>
          <b-button variant="primary" class="start-button" block>
            <i class="fas fa-play mr-2"></i>
            Start Learning
          </b-button>
        </div>

        <div class="info-card">
          <h3>Course Information</h3>
          <ul class="course-info-list">
            <li>
              <i class="fas fa-clock"></i>
              <span>Duration: {{ course.duration }}</span>
            </li>
            <li>
              <i class="fas fa-signal"></i>
              <span>Level: {{ course.level }}</span>
            </li>
            <li>
              <i class="fas fa-book"></i>
              <span>12 Modules</span>
            </li>
            <li>
              <i class="fas fa-video"></i>
              <span>24 Video Lessons</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loading-container">
    <b-spinner variant="primary" label="Loading..."></b-spinner>
  </div>
</template>

<script>
import RestServices from '@/services/RestServices';

export default {
  name: 'CourseDetails',
  data() {
    return {
      course: null,
      curriculum: [
        {
          title: 'Getting Started',
          duration: '1 hour',
          lessons: [
            'Course Introduction',
            'Setting Up Your Environment',
            'Basic Concepts Overview'
          ]
        },
        {
          title: 'Core Concepts',
          duration: '2 hours',
          lessons: [
            'Understanding the Fundamentals',
            'Best Practices and Patterns',
            'Hands-on Exercise'
          ]
        },
        {
          title: 'Advanced Topics',
          duration: '3 hours',
          lessons: [
            'Advanced Features',
            'Real-world Scenarios',
            'Performance Optimization'
          ]
        }
      ]
    };
  },
  methods: {
    getLevelVariant(level) {
      const variants = {
        'Beginner': 'success',
        'Intermediate': 'warning',
        'Advanced': 'danger'
      };
      return variants[level] || 'primary';
    },
    async fetchCourse() {
      try {
        const response = await RestServices.getCourse(this.$route.params.id);
        this.course = response.data;
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    }
  },
  created() {
    this.fetchCourse();
  }
};
</script>

<style scoped>
.course-details-container {
  padding: 2rem;
  color: white;
}

.course-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.header-content {
  padding: 2rem;
}

.course-title {
  font-size: 2.5rem;
  margin: 1rem 0;
}

.course-description {
  font-size: 1.1rem;
  color: #a0aec0;
  margin-bottom: 1.5rem;
}

.header-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.course-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.section-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.learning-outcomes {
  list-style: none;
  padding: 0;
}

.learning-outcomes li {
  margin: 1rem 0;
  display: flex;
  align-items: center;
}

.learning-outcomes i {
  color: #48bb78;
  margin-right: 1rem;
}

.curriculum-section {
  margin-bottom: 1.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-duration {
  color: #a0aec0;
  font-size: 0.9rem;
}

.section-lessons {
  list-style: none;
  padding: 0;
}

.section-lessons li {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.section-lessons i {
  margin-right: 1rem;
  color: #4299e1;
}

.sidebar .progress-card,
.sidebar .info-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.progress-circle {
  width: 120px;
  height: 120px;
  background: conic-gradient(#4299e1 0%, #1a202c 0%);
  border-radius: 50%;
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-text {
  background: #1a202c;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.course-info-list {
  list-style: none;
  padding: 0;
}

.course-info-list li {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: #a0aec0;
}

.course-info-list i {
  width: 20px;
  margin-right: 1rem;
}

.start-button {
  margin-top: 1rem;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

@media (max-width: 768px) {
  .course-header,
  .course-content {
    grid-template-columns: 1fr;
  }
}
