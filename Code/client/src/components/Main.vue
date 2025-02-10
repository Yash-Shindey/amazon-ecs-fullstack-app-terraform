<template>
  <div class="main-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Accelerate Your Cloud Career</h1>
        <p class="hero-subtitle">
          Master AWS, DevOps, and Cloud Architecture through hands-on projects
          and real-world scenarios
        </p>
        <div class="hero-cta">
          <b-button variant="primary" size="lg" to="/courses"
            >Start Learning</b-button
          >
          <b-button variant="outline-light" size="lg" to="/about"
            >Learn More</b-button
          >
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Active Learners</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Practice Labs</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Hands-on</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Features -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Why Choose Our Platform?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <i class="fas fa-graduation-cap"></i>
            <h3>Project-Based Learning</h3>
            <p>
              Build real-world cloud infrastructure and applications following
              industry best practices
            </p>
          </div>
          <div class="feature-card">
            <i class="fas fa-laptop-code"></i>
            <h3>Hands-On Labs</h3>
            <p>
              Practice in real AWS environments with guided labs and assessments
            </p>
          </div>
          <div class="feature-card">
            <i class="fas fa-certificate"></i>
            <h3>Industry Recognition</h3>
            <p>Earn certificates that showcase your practical cloud skills</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-users"></i>
            <h3>Community Support</h3>
            <p>Learn alongside peers and get help from cloud experts</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="featured-courses">
      <div class="container">
        <h2 class="section-title">Most Popular Courses</h2>
        <p class="section-subtitle">
          Start your cloud journey with our highest-rated courses
        </p>
        <div class="courses-grid">
          <course-card
            v-for="course in featuredCourses"
            :key="course.id"
            :course="course"
          />
        </div>
        <div class="text-center mt-4">
          <b-button variant="outline-primary" size="lg" to="/courses"
            >View All Courses</b-button
          >
        </div>
      </div>
    </section>

    <!-- Learning Paths -->
    <section class="paths-section">
      <div class="container">
        <h2 class="section-title">Professional Learning Paths</h2>
        <p class="section-subtitle">
          Structured curriculums designed for your career goals
        </p>
        <div class="paths-grid">
          <div class="path-card">
            <div class="path-icon"><i class="fas fa-cloud"></i></div>
            <h3>Cloud Architect</h3>
            <p>Master cloud architecture and infrastructure design</p>
            <ul>
              <li><i class="fas fa-check"></i> AWS Fundamentals</li>
              <li><i class="fas fa-check"></i> Infrastructure as Code</li>
              <li><i class="fas fa-check"></i> High Availability Design</li>
              <li><i class="fas fa-check"></i> Security & Compliance</li>
            </ul>
            <b-button variant="primary">Start Path</b-button>
          </div>
          <div class="path-card">
            <div class="path-icon"><i class="fas fa-cogs"></i></div>
            <h3>DevOps Engineer</h3>
            <p>Learn modern DevOps practices and tools</p>
            <ul>
              <li><i class="fas fa-check"></i> Container Orchestration</li>
              <li><i class="fas fa-check"></i> CI/CD Pipeline Development</li>
              <li><i class="fas fa-check"></i> Infrastructure Automation</li>
              <li><i class="fas fa-check"></i> Monitoring & Logging</li>
            </ul>
            <b-button variant="primary">Start Path</b-button>
          </div>
          <div class="path-card">
            <div class="path-icon"><i class="fas fa-shield-alt"></i></div>
            <h3>Security Specialist</h3>
            <p>Become an expert in cloud security</p>
            <ul>
              <li><i class="fas fa-check"></i> Security Best Practices</li>
              <li><i class="fas fa-check"></i> Compliance Frameworks</li>
              <li><i class="fas fa-check"></i> Identity & Access Management</li>
              <li><i class="fas fa-check"></i> Security Automation</li>
            </ul>
            <b-button variant="primary">Start Path</b-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">Student Success Stories</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <i class="fas fa-quote-left"></i>
              <p>
                "The hands-on projects helped me transition into a cloud role.
                The real-world scenarios were invaluable."
              </p>
            </div>
            <div class="testimonial-author">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                alt="Student"
              />
              <div>
                <h4>Alex Johnson</h4>
                <p>Cloud Engineer at Tech Corp</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-content">
              <i class="fas fa-quote-left"></i>
              <p>
                "Excellent platform for learning AWS and DevOps. The
                project-based approach made learning practical and fun."
              </p>
            </div>
            <div class="testimonial-author">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                alt="Student"
              />
              <div>
                <h4>Sarah Chen</h4>
                <p>DevOps Engineer at CloudTech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Resources -->
    <section class="resources-section">
      <div class="container">
        <h2 class="section-title">Latest Resources</h2>
        <div class="resources-grid">
          <div class="resource-card">
            <div class="resource-icon">
              <i class="fas fa-book"></i>
            </div>
            <h4>AWS Best Practices Guide</h4>
            <p>Updated for 2024</p>
            <b-button variant="outline-primary">Download</b-button>
          </div>
          <div class="resource-card">
            <div class="resource-icon">
              <i class="fas fa-video"></i>
            </div>
            <h4>DevOps Tutorial Series</h4>
            <p>10 New Videos Added</p>
            <b-button variant="outline-primary">Watch Now</b-button>
          </div>
          <div class="resource-card">
            <div class="resource-icon">
              <i class="fas fa-flask"></i>
            </div>
            <h4>Hands-on Labs</h4>
            <p>5 New Practice Labs</p>
            <b-button variant="outline-primary">Start Lab</b-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Start Your Cloud Journey?</h2>
        <p>Join thousands of students who are building their cloud careers</p>
        <b-button variant="primary" size="lg" to="/courses"
          >Get Started Now</b-button
        >
      </div>
    </section>
  </div>
</template>
<script>
import CourseCard from "./CourseCard.vue";
import RestServices from "@/services/RestServices";

export default {
  name: "Main",
  components: {
    CourseCard,
  },
  data() {
    return {
      featuredCourses: [],
      testimonials: [
        {
          id: 1,
          text:
            "The hands-on projects helped me transition into a cloud role. The real-world scenarios were invaluable.",
          author: "Alex Johnson",
          role: "Cloud Engineer at Tech Corp",
          image: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
        },
        {
          id: 2,
          text:
            "Excellent platform for learning AWS and DevOps. The project-based approach made learning practical and fun.",
          author: "Sarah Chen",
          role: "DevOps Engineer at CloudTech",
          image: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
        },
      ],
      latestResources: [
        {
          id: 1,
          title: "AWS Best Practices Guide",
          description: "Updated for 2024",
          icon: "fas fa-book",
          link: "/resources/aws-guide",
        },
        {
          id: 2,
          title: "DevOps Tutorial Series",
          description: "10 New Videos Added",
          icon: "fas fa-video",
          link: "/resources/devops-tutorials",
        },
        {
          id: 3,
          title: "Hands-on Labs",
          description: "5 New Practice Labs",
          icon: "fas fa-flask",
          link: "/resources/labs",
        },
      ],
      learningPaths: [
        {
          id: 1,
          title: "Cloud Architect",
          description: "Master cloud architecture and infrastructure design",
          icon: "fas fa-cloud",
          modules: [
            "AWS Fundamentals",
            "Infrastructure as Code",
            "High Availability Design",
            "Security & Compliance",
          ],
        },
        {
          id: 2,
          title: "DevOps Engineer",
          description: "Learn modern DevOps practices and tools",
          icon: "fas fa-cogs",
          modules: [
            "Container Orchestration",
            "CI/CD Pipeline Development",
            "Infrastructure Automation",
            "Monitoring & Logging",
          ],
        },
        {
          id: 3,
          title: "Security Specialist",
          description: "Become an expert in cloud security",
          icon: "fas fa-shield-alt",
          modules: [
            "Security Best Practices",
            "Compliance Frameworks",
            "Identity & Access Management",
            "Security Automation",
          ],
        },
      ],
      platformStats: {
        activeUsers: "500+",
        totalCourses: "20+",
        practiceLabs: "50+",
        completionRate: "94%",
      },
    };
  },
  computed: {
    topFeaturedCourses() {
      return this.featuredCourses.slice(0, 3);
    },
  },
  methods: {
    async fetchFeaturedCourses() {
      try {
        const response = await RestServices.getAllCourses();
        this.featuredCourses = response.data.courses
          .filter((course) => course.featured)
          .slice(0, 3);
      } catch (error) {
        console.error("Error fetching featured courses:", error);
      }
    },
    startLearningPath(pathId) {
      // Future implementation: track user's learning path
      this.$router.push(`/learning-path/${pathId}`);
    },
    viewResource(resourceLink) {
      this.$router.push(resourceLink);
    },
    startFreeTrial() {
      // Future implementation: user registration flow
      this.$router.push("/register");
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    // Add scroll animation for statistics
    const animateStats = () => {
      // Future implementation: animate statistics on scroll
    };
    window.addEventListener("scroll", animateStats);
  },
  created() {
    this.fetchFeaturedCourses();
  },
  beforeDestroy() {
    // Clean up scroll listener
    window.removeEventListener("scroll", this.animateStats);
  },
};
</script>

<style scoped>
/* Main Container */
.main-container {
  min-height: 100vh;
  color: #1a202c;
  background-color: #f7fafc;
}

/* Hero Section */
.hero-section {
  min-height: 90vh;
  background: linear-gradient(rgba(26, 32, 44, 0.85), rgba(26, 32, 44, 0.95)),
    url("https://cdn-icons-png.flaticon.com/512/8326/8326877.png") center/cover;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #60a5fa, #93c5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  animation: fadeInUp 1s ease-out;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  animation: fadeInUp 1.2s ease-out;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 3rem;
  animation: fadeInUp 1.4s ease-out;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.feature-card {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.feature-card i {
  font-size: 2rem;
  color: #60a5fa;
  margin-bottom: 1rem;
}

/* Learning Paths */
.paths-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1a202c;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #4a5568;
  text-align: center;
  margin-bottom: 3rem;
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.path-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.path-card:hover {
  transform: translateY(-5px);
}

.path-icon {
  width: 4rem;
  height: 4rem;
  background: #ebf5ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.path-icon i {
  font-size: 1.5rem;
  color: #60a5fa;
}

/* Testimonials */
.testimonials-section {
  padding: 5rem 0;
  background: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.testimonial-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.testimonial-content {
  margin-bottom: 1.5rem;
  position: relative;
}

.testimonial-content i {
  color: #60a5fa;
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-author img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
}

/* Resources Section */
.resources-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.resource-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
}

.resource-icon {
  width: 4rem;
  height: 4rem;
  background: #ebf5ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.resource-icon i {
  font-size: 1.5rem;
  color: #60a5fa;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(120deg, #1a202c, #2d3748);
  color: white;
  text-align: center;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 3.5rem;
  }

  .features-grid,
  .paths-grid,
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }

  .features-grid,
  .paths-grid,
  .testimonials-grid,
  .resources-grid {
    grid-template-columns: 1fr;
  }

  .hero-cta {
    flex-direction: column;
    gap: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

/* Button Styles */
.b-button {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.b-button.btn-primary {
  background: #60a5fa;
  color: white;
  border: none;
}

.b-button.btn-primary:hover {
  background: #3b82f6;
  transform: translateY(-2px);
}

.b-button.btn-outline-light {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.b-button.btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
</style>
