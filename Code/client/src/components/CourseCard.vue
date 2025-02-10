<template>
  <div class="course-card">
    <div class="card-image-wrapper">
      <img :src="course.image" :alt="course.title" class="card-img" />
      <div class="card-overlay">
        <b-button
          variant="primary"
          @click="startCourse(course.id)"
          class="start-button"
        >
          Start Learning
        </b-button>
      </div>
    </div>
    <div class="card-content">
      <b-badge :variant="getLevelVariant(course.level)" class="level-badge">
        {{ course.level }}
      </b-badge>
      <h3 class="course-title">{{ course.title }}</h3>
      <p class="course-description">{{ course.description }}</p>
      <div class="course-meta">
        <span class="duration">
          <i class="far fa-clock"></i>
          {{ course.duration }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getLevelVariant(level) {
      const variants = {
        Beginner: "success",
        Intermediate: "warning",
        Advanced: "danger",
      };
      return variants[level] || "primary";
    },
    startCourse(id) {
      this.$router.push(`/course/${id}`);
    },
  },
};
</script>

<style scoped></style>
