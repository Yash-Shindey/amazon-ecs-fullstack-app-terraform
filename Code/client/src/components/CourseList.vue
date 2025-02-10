<template>
  <div class="courses-container">
    <div class="courses-header">
      <h1>Available Courses</h1>
      <p>Master cloud computing with our comprehensive curriculum</p>

      <div class="filters">
        <b-dropdown text="Level" class="m-2">
          <b-dropdown-item @click="filterLevel('')">All Levels</b-dropdown-item>
          <b-dropdown-item @click="filterLevel('Beginner')"
            >Beginner</b-dropdown-item
          >
          <b-dropdown-item @click="filterLevel('Intermediate')"
            >Intermediate</b-dropdown-item
          >
          <b-dropdown-item @click="filterLevel('Advanced')"
            >Advanced</b-dropdown-item
          >
        </b-dropdown>

        <b-dropdown text="Duration" class="m-2">
          <b-dropdown-item @click="filterDuration('')"
            >Any Duration</b-dropdown-item
          >
          <b-dropdown-item @click="filterDuration('short')"
            >Under 5 hours</b-dropdown-item
          >
          <b-dropdown-item @click="filterDuration('medium')"
            >5-10 hours</b-dropdown-item
          >
          <b-dropdown-item @click="filterDuration('long')"
            >Over 10 hours</b-dropdown-item
          >
        </b-dropdown>

        <b-form-input
          v-model="search"
          placeholder="Search courses..."
          class="w-25"
        ></b-form-input>
      </div>
    </div>

    <!-- Learning Paths Section -->
    <div class="learning-paths">
      <h2>Professional Learning Paths</h2>
      <div class="paths-grid">
        <div class="path-card">
          <h3>Cloud Architect Path</h3>
          <p>
            Become an expert in cloud architecture and infrastructure design
          </p>
          <ul>
            <li>AWS Fundamentals (6 hours)</li>
            <li>Infrastructure as Code with Terraform (10 hours)</li>
            <li>Advanced Networking in AWS (8 hours)</li>
            <li>High Availability Architecture (12 hours)</li>
            <li>Cloud Security & Compliance (10 hours)</li>
            <li>Cost Optimization Strategies (6 hours)</li>
            <li>System Design & Architecture (15 hours)</li>
          </ul>
          <p>Total Duration: 67 hours</p>
          <b-button variant="primary">Start Path</b-button>
        </div>

        <div class="path-card">
          <h3>DevOps Engineer Path</h3>
          <p>Master modern DevOps practices and tooling</p>
          <ul>
            <li>Container Fundamentals with Docker (8 hours)</li>
            <li>Container Orchestration with ECS (10 hours)</li>
            <li>CI/CD Pipeline Development (12 hours)</li>
            <li>Infrastructure Automation (10 hours)</li>
            <li>Monitoring & Logging (8 hours)</li>
            <li>DevOps Security (8 hours)</li>
            <li>Microservices Architecture (15 hours)</li>
          </ul>
          <p>Total Duration: 71 hours</p>
          <b-button variant="primary">Start Path</b-button>
        </div>

        <div class="path-card">
          <h3>Cloud Security Expert</h3>
          <p>Comprehensive security training for cloud environments</p>
          <ul>
            <li>Cloud Security Fundamentals (6 hours)</li>
            <li>Identity & Access Management (8 hours)</li>
            <li>Network Security (10 hours)</li>
            <li>Container Security (8 hours)</li>
            <li>Security Automation (10 hours)</li>
            <li>Incident Response (8 hours)</li>
            <li>Compliance & Auditing (12 hours)</li>
          </ul>
          <p>Total Duration: 62 hours</p>
          <b-button variant="primary">Start Path</b-button>
        </div>
      </div>
    </div>

    <!-- Individual Courses Section -->
    <div class="individual-courses">
      <h2>Individual Courses</h2>

      <!-- AWS Core Services -->
      <div class="course-category">
        <h3>AWS Core Services</h3>
        <div class="courses-grid">
          <div class="course-card">
            <h4>AWS Fundamentals</h4>
            <b-badge variant="success">Beginner</b-badge>
            <p>Learn AWS core services and concepts</p>
            <ul>
              <li>Module 1: AWS Global Infrastructure</li>
              <li>Module 2: IAM & Security Basics</li>
              <li>Module 3: VPC Networking</li>
              <li>Module 4: EC2 & EBS</li>
              <li>Module 5: S3 & Storage Solutions</li>
              <li>Module 6: RDS & Database Services</li>
              <li>Module 7: Route 53 & CloudFront</li>
              <li>Module 8: CloudWatch & Monitoring</li>
            </ul>
            <p>Duration: 6 hours</p>
            <p>Projects: 3 hands-on labs</p>
            <b-button variant="primary">Start Learning</b-button>
          </div>

          <div class="course-card">
            <h4>Advanced Networking in AWS</h4>
            <b-badge variant="danger">Advanced</b-badge>
            <p>Deep dive into AWS networking concepts</p>
            <ul>
              <li>Module 1: VPC Advanced Concepts</li>
              <li>Module 2: Hybrid Connectivity</li>
              <li>Module 3: Transit Gateway</li>
              <li>Module 4: Network Security</li>
              <li>Module 5: DNS Strategies</li>
              <li>Module 6: Load Balancing in Depth</li>
              <li>Module 7: Network Performance</li>
              <li>Module 8: Troubleshooting</li>
            </ul>
            <p>Duration: 12 hours</p>
            <p>Projects: 5 advanced labs</p>
            <b-button variant="primary">Start Learning</b-button>
          </div>
        </div>
      </div>

      <!-- Container & Orchestration -->
      <div class="course-category">
        <h3>Container & Orchestration</h3>
        <div class="courses-grid">
          <div class="course-card">
            <h4>Container Orchestration with ECS</h4>
            <b-badge variant="warning">Intermediate</b-badge>
            <p>Master Docker and ECS</p>
            <ul>
              <li>Module 1: Docker Fundamentals</li>
              <li>Module 2: ECS Architecture</li>
              <li>Module 3: Task Definitions</li>
              <li>Module 4: Service Configuration</li>
              <li>Module 5: Auto Scaling</li>
              <li>Module 6: Load Balancing</li>
              <li>Module 7: Monitoring & Logging</li>
              <li>Module 8: Best Practices</li>
              <li>Module 9: Cost Optimization</li>
              <li>Module 10: Advanced Features</li>
            </ul>
            <p>Duration: 8 hours</p>
            <p>Projects: 4 real-world applications</p>
            <b-button variant="primary">Start Learning</b-button>
          </div>

          <div class="course-card">
            <h4>Microservices Architecture</h4>
            <b-badge variant="danger">Advanced</b-badge>
            <p>Build scalable microservices applications</p>
            <ul>
              <li>Module 1: Microservices Fundamentals</li>
              <li>Module 2: Service Design Patterns</li>
              <li>Module 3: API Gateway</li>
              <li>Module 4: Service Discovery</li>
              <li>Module 5: Data Management</li>
              <li>Module 6: Inter-service Communication</li>
              <li>Module 7: Resilience Patterns</li>
              <li>Module 8: Monitoring & Tracing</li>
              <li>Module 9: Security Considerations</li>
              <li>Module 10: Performance Optimization</li>
            </ul>
            <p>Duration: 15 hours</p>
            <p>Projects: 3 microservices applications</p>
            <b-button variant="primary">Start Learning</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RestServices from "@/services/RestServices";

export default {
  name: "CourseList",
  data() {
    return {
      search: "",
      selectedLevel: "",
      selectedDuration: "",
      courses: [
        {
          id: 1,
          title: "AWS Fundamentals",
          level: "Beginner",
          duration: "6 hours",
          description: "Learn AWS core services",
          progress: "23%",
        },
        {
          id: 2,
          title: "Container Orchestration",
          level: "Intermediate",
          duration: "8 hours",
          description: "Master Docker and ECS",
          progress: "24%",
        },
        {
          id: 3,
          title: "Cloud Security",
          level: "Advanced",
          duration: "10 hours",
          description: "Security best practices",
          progress: "99%",
        },
      ],
    };
  },
  methods: {
    filterLevel(level) {
      this.selectedLevel = level;
    },
    filterDuration(duration) {
      this.selectedDuration = duration;
    },
    startCourse(id) {
      this.$router.push(`/course/${id}`);
    },
    getLevelVariant(level) {
      const variants = {
        Beginner: "success",
        Intermediate: "warning",
        Advanced: "danger",
      };
      return variants[level] || "primary";
    },
    async fetchCourses() {
      try {
        const response = await RestServices.getAllCourses();
        this.courses = response.data.courses;
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    },
  },
  computed: {
    filteredCourses() {
      return this.courses.filter((course) => {
        const matchesSearch =
          course.title.toLowerCase().includes(this.search.toLowerCase()) ||
          course.description.toLowerCase().includes(this.search.toLowerCase());

        const matchesLevel =
          !this.selectedLevel || course.level === this.selectedLevel;

        let matchesDuration = true;
        if (this.selectedDuration) {
          const hours = parseInt(course.duration);
          switch (this.selectedDuration) {
            case "short":
              matchesDuration = hours < 5;
              break;
            case "medium":
              matchesDuration = hours >= 5 && hours <= 10;
              break;
            case "long":
              matchesDuration = hours > 10;
              break;
          }
        }

        return matchesSearch && matchesLevel && matchesDuration;
      });
    },
    totalCoursesCount() {
      return this.courses.length;
    },
    filteredCoursesCount() {
      return this.filteredCourses.length;
    },
    categoryStats() {
      const stats = {
        beginner: 0,
        intermediate: 0,
        advanced: 0,
      };

      this.courses.forEach((course) => {
        switch (course.level.toLowerCase()) {
          case "beginner":
            stats.beginner++;
            break;
          case "intermediate":
            stats.intermediate++;
            break;
          case "advanced":
            stats.advanced++;
            break;
        }
      });

      return stats;
    },
  },
  created() {
    this.fetchCourses();
  },
};
</script>

<style scoped>
/* Main Container */
.courses-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #1a202c;
  background: #f7fafc;
  min-height: 100vh;
}

/* Header Section */
.courses-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.courses-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.courses-header p {
  font-size: 1.1rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto 2rem;
}

/* Filters Section */
.filters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.b-dropdown {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
}

.b-form-input {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: 300px !important;
}

/* Learning Paths Section */
.learning-paths {
  margin-bottom: 4rem;
}

.learning-paths h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.path-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.path-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.path-card h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.path-card p {
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.path-card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.path-card li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.75rem;
  color: #4a5568;
}

.path-card li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #4299e1;
}

/* Individual Courses Section */
.individual-courses {
  margin-top: 4rem;
}

.individual-courses h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #2d3748;
  text-align: center;
  margin-bottom: 3rem;
}

/* Course Category */
.course-category {
  margin-bottom: 4rem;
}

.course-category h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 4px solid #4299e1;
  display: flex;
  align-items: center;
}

/* Course Grid and Cards */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
}

.course-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.course-card h4 {
  font-size: 1.5rem;
  color: #2d3748;
  margin: 1rem 0;
}

.course-card p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.course-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.course-card li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
  color: #4a5568;
  line-height: 1.5;
}

.course-card li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #4299e1;
}

/* Course Meta */
.duration,
.projects {
  color: #4a5568;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

/* Badge Styling */
.badge {
  display: inline-flex;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.badge-beginner {
  background: #c6f6d5;
  color: #22543d;
}

.badge-intermediate {
  background: #feebc8;
  color: #744210;
}

.badge-advanced {
  background: #fed7d7;
  color: #742a2a;
}

/* Button Styling */
.btn-primary,
.start-learning {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: #4299e1;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-top: auto;
  width: fit-content;
}

.btn-primary:hover,
.start-learning:hover {
  background: #3182ce;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .courses-container {
    padding: 1rem;
  }

  .courses-header h1 {
    font-size: 2rem;
  }

  .filters {
    flex-direction: column;
    align-items: stretch;
  }

  .b-form-input {
    width: 100% !important;
  }

  .paths-grid,
  .courses-grid {
    grid-template-columns: 1fr;
  }

  .course-card,
  .path-card {
    margin: 0;
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.path-card,
.course-card {
  animation: fadeIn 0.6s ease-out forwards;
}
</style>
