<template>
  <div class="about-container">
    <div class="hero-section">
      <h1>About Cloud Learning Platform</h1>
      <p>
        A comprehensive learning platform built from ground up using modern
        cloud technologies
      </p>
    </div>

    <div class="content-section">
      <div class="tech-stack">
        <h2>Project Overview</h2>
        <p>
          Built entirely from scratch, this cloud learning platform demonstrates
          the implementation of modern DevOps practices and cloud architecture
          patterns. The project showcases my ability to design and implement
          complex cloud infrastructure while maintaining scalability, security,
          and high availability.
        </p>

        <div class="tech-grid">
          <div class="tech-item">
            <i class="fab fa-aws"></i>
            <h3>AWS Infrastructure</h3>
            <ul>
              <li>Custom ECS cluster configuration with Fargate</li>
              <li>DynamoDB with optimized access patterns</li>
              <li>Multi-stage CodePipeline setup</li>
              <li>Load balanced architecture across AZs</li>
              <li>VPC with public-private subnet architecture</li>
            </ul>
          </div>

          <div class="tech-item">
            <i class="fas fa-code"></i>
            <h3>Frontend Development</h3>
            <ul>
              <li>Vue.js with custom components</li>
              <li>Interactive UI with Bootstrap Vue</li>
              <li>Responsive design implementation</li>
              <li>Client-side state management</li>
            </ul>
          </div>

          <div class="tech-item">
            <i class="fas fa-server"></i>
            <h3>Backend Architecture</h3>
            <ul>
              <li>Node.js REST API development</li>
              <li>Express server with middleware</li>
              <li>Custom AWS SDK integrations</li>
              <li>API documentation with Swagger</li>
            </ul>
          </div>

          <div class="tech-item">
            <i class="fas fa-cogs"></i>
            <h3>DevOps Implementation</h3>
            <ul>
              <li>Infrastructure as Code with Terraform</li>
              <li>Containerization with Docker</li>
              <li>Blue/Green deployment strategy</li>
              <li>Automated CI/CD pipeline</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="implementation-section">
        <h2>Key Features & Implementation</h2>
        <ul>
          <li>
            <strong>Infrastructure as Code:</strong> Developed comprehensive
            Terraform modules for AWS resource provisioning, enabling repeatable
            and version-controlled infrastructure deployment
          </li>
          <li>
            <strong>Container Orchestration:</strong> Implemented ECS tasks and
            services with custom task definitions and auto-scaling policies
          </li>
          <li>
            <strong>CI/CD Pipeline:</strong> Created a robust pipeline using AWS
            CodePipeline, CodeBuild, and CodeDeploy for automated testing and
            deployment
          </li>
          <li>
            <strong>High Availability:</strong> Designed the architecture to
            span multiple availability zones with load balancing and
            auto-scaling capabilities
          </li>
          <li>
            <strong>Security:</strong> Implemented IAM roles, security groups,
            and network ACLs following AWS best practices
          </li>
        </ul>
      </div>

      <div class="author-section">
        <h2>About the Developer</h2>
        <div class="author-card">
          <img
            img
            src="@/assets/images/Author.jpeg"
            alt="Developer Icon"
            class="author-image"
          />
          <div class="author-info">
            <h3>Yash Shindey</h3>
            <p>Undergrad Student at Dayananda Sagar University</p>
            <p class="author-bio">
              As a passionate Cloud & DevOps enthusiast, I developed this
              platform to demonstrate my expertise in cloud architecture and
              DevOps practices. This project showcases my ability to design and
              implement production-ready cloud solutions while incorporating
              modern development practices.
            </p>
            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/yashshindey/"
                target="_blank"
                class="social-link"
              >
                <i class="fab fa-linkedin"></i> Connect on LinkedIn
              </a>
              <a
                href="https://github.com/Yash-Shindey"
                target="_blank"
                class="social-link"
              >
                <i class="fab fa-github"></i> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="architecture-section">
        <h2>Technical Architecture</h2>
        <p>
          This platform showcases a modern cloud-native architecture with
          several key features:
        </p>
        <ul>
          <li>
            Microservices architecture using containerized applications on ECS
            Fargate
          </li>
          <li>
            Zero-downtime deployments using Blue/Green deployment strategy
          </li>
          <li>Serverless data layer using DynamoDB for scalability</li>
          <li>Custom Terraform modules for infrastructure management</li>
          <li>Automated CI/CD pipeline with AWS CodePipeline</li>
          <li>Multi-AZ deployment for high availability</li>
          <li>Custom VPC design with public and private subnets</li>
          <li>Application Load Balancer for traffic distribution</li>
          <li>Comprehensive logging and monitoring setup</li>
        </ul>
      </div>

      <div class="future-section">
        <h2>Future Enhancements</h2>
        <p>Planned improvements for the platform include:</p>
        <ul>
          <li>Integration with AWS Cognito for user authentication</li>
          <li>Enhanced monitoring with CloudWatch dashboards</li>
          <li>Implementation of AWS WAF for security</li>
          <li>Integration with additional AWS services</li>
          <li>Performance optimization and caching layers</li>
        </ul>
      </div>
    </div>
  </div>
</template>

# Add after your template section:

<script>
export default {
  name: "About",
  data() {
    return {
      technologies: [
        {
          icon: "fab fa-aws",
          title: "AWS Infrastructure",
          items: [
            "Custom ECS cluster configuration with Fargate",
            "DynamoDB with optimized access patterns",
            "Multi-stage CodePipeline setup",
            "Load balanced architecture across AZs",
            "VPC with public-private subnet architecture",
          ],
        },
        {
          icon: "fas fa-code",
          title: "Frontend Development",
          items: [
            "Vue.js with custom components",
            "Interactive UI with Bootstrap Vue",
            "Responsive design implementation",
            "Client-side state management",
          ],
        },
        {
          icon: "fas fa-server",
          title: "Backend Architecture",
          items: [
            "Node.js REST API development",
            "Express server with middleware",
            "Custom AWS SDK integrations",
            "API documentation with Swagger",
          ],
        },
        {
          icon: "fas fa-cogs",
          title: "DevOps Implementation",
          items: [
            "Infrastructure as Code with Terraform",
            "Containerization with Docker",
            "Blue/Green deployment strategy",
            "Automated CI/CD pipeline",
          ],
        },
      ],
      implementations: [
        {
          title: "Infrastructure as Code",
          description:
            "Developed comprehensive Terraform modules for AWS resource provisioning, enabling repeatable and version-controlled infrastructure deployment",
        },
        {
          title: "Container Orchestration",
          description:
            "Implemented ECS tasks and services with custom task definitions and auto-scaling policies",
        },
        {
          title: "CI/CD Pipeline",
          description:
            "Created a robust pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy for automated testing and deployment",
        },
        {
          title: "High Availability",
          description:
            "Designed the architecture to span multiple availability zones with load balancing and auto-scaling capabilities",
        },
        {
          title: "Security",
          description:
            "Implemented IAM roles, security groups, and network ACLs following AWS best practices",
        },
      ],
      socialLinks: [
        {
          icon: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/yashshindey/",
          label: "Connect on LinkedIn",
        },
        {
          icon: "fab fa-github",
          url: "https://github.com/Yash-Shindey",
          label: "View on GitHub",
        },
      ],
    };
  },
  methods: {
    openSocialLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  color: #1a202c;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(rgba(26, 32, 44, 0.9), rgba(26, 32, 44, 0.9)),
    url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
      center/cover;
  padding: 6rem 2rem;
  text-align: center;
  color: white;
  border-radius: 0 0 2rem 2rem;
  margin-bottom: 4rem;
}

.hero-section h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #60a5fa, #93c5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-section p {
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
}

/* Content Section */
.content-section {
  padding: 2rem 0;
}

.content-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #2d3748;
}

/* Tech Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.tech-item {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-5px);
}

.tech-item i {
  font-size: 2.5rem;
  color: #4299e1;
  margin-bottom: 1.5rem;
}

.tech-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

.tech-item ul {
  list-style: none;
  padding: 0;
}

.tech-item li {
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  color: #4a5568;
}

.tech-item li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #4299e1;
}

/* Implementation Section */
.implementation-section {
  background: #f7fafc;
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin: 4rem 0;
}

.implementation-section ul {
  list-style: none;
  padding: 0;
}

.implementation-section li {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  position: relative;
}

.implementation-section li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #48bb78;
  font-weight: bold;
}

/* Author Section */
.author-section {
  padding: 4rem 0;
}

.author-card {
  display: flex;
  gap: 2rem;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.author-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-info h3 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.author-bio {
  color: #4a5568;
  margin: 1rem 0;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #4299e1;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.3s ease;
}

.social-link:hover {
  background: #3182ce;
}

/* Architecture Section */
.architecture-section {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 4rem 0;
}

.architecture-section ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.architecture-section li {
  padding-left: 1.5rem;
  position: relative;
  color: #4a5568;
}

.architecture-section li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

/* Future Section */
.future-section {
  background: #f7fafc;
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin: 4rem 0;
}

.future-section ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.future-section li {
  padding-left: 1.5rem;
  position: relative;
  color: #4a5568;
}

.future-section li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #4299e1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }

  .author-card {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .tech-grid {
    grid-template-columns: 1fr;
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

.tech-item,
.author-card,
.implementation-section,
.architecture-section {
  animation: fadeIn 0.6s ease-out forwards;
}
</style>
