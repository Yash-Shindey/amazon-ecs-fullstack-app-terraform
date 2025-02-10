<template>
  <div class="resources-container">
    <h1>Learning Resources</h1>
    <p>
      Access our comprehensive collection of cloud computing resources,
      tutorials, guides, and hands-on labs
    </p>

    <div class="resources-nav">
      <b-nav tabs>
        <b-nav-item
          :active="activeTab === 'documentation'"
          @click="activeTab = 'documentation'"
          >Documentation</b-nav-item
        >
        <b-nav-item
          :active="activeTab === 'videos'"
          @click="activeTab = 'videos'"
          >Video Tutorials</b-nav-item
        >
        <b-nav-item :active="activeTab === 'labs'" @click="activeTab = 'labs'"
          >Practice Labs</b-nav-item
        >
        <b-nav-item :active="activeTab === 'tools'" @click="activeTab = 'tools'"
          >Tools & Downloads</b-nav-item
        >
        <b-nav-item
          :active="activeTab === 'community'"
          @click="activeTab = 'community'"
          >Community Resources</b-nav-item
        >
      </b-nav>
    </div>

    <!-- Documentation Section -->
    <div v-if="activeTab === 'documentation'">
      <h2>Official Documentation</h2>

      <div class="doc-section">
        <h3>AWS Services Guides</h3>
        <div class="resource-card">
          <h4>Amazon ECS Deep Dive</h4>
          <p>Complete guide to Amazon Elastic Container Service:</p>
          <ul>
            <li>ECS Architecture and Components</li>
            <li>Task Definition Writing Guide</li>
            <li>Service Configuration Best Practices</li>
            <li>Cluster Management Strategies</li>
            <li>Auto Scaling Configuration</li>
            <li>Load Balancer Integration</li>
            <li>ECS Anywhere Setup</li>
            <li>Monitoring and Logging</li>
          </ul>
          <b-button>Read Guide</b-button>
        </div>

        <div class="resource-card">
          <h4>Container Security Handbook</h4>
          <ul>
            <li>Container Image Security</li>
            <li>Runtime Security Controls</li>
            <li>Network Security & VPC Configuration</li>
            <li>IAM Roles and Permissions</li>
            <li>Secrets Management</li>
            <li>Security Monitoring Tools</li>
            <li>Compliance Frameworks</li>
            <li>Incident Response Procedures</li>
          </ul>
          <b-button>Read Guide</b-button>
        </div>

        <div class="resource-card">
          <h4>Infrastructure as Code with Terraform</h4>
          <ul>
            <li>Terraform Basics and Setup</li>
            <li>AWS Provider Configuration</li>
            <li>Resource Management</li>
            <li>State File Handling</li>
            <li>Module Development</li>
            <li>Variables and Outputs</li>
            <li>Remote State Storage</li>
            <li>Workspace Management</li>
          </ul>
          <b-button>Read Guide</b-button>
        </div>
      </div>

      <div class="doc-section">
        <h3>Implementation Guides</h3>
        <div class="resource-card">
          <h4>CI/CD Pipeline Setup</h4>
          <ul>
            <li>CodePipeline Architecture</li>
            <li>Source Control Integration</li>
            <li>Build Process Configuration</li>
            <li>Test Automation Setup</li>
            <li>Deployment Strategies</li>
            <li>Pipeline Monitoring</li>
            <li>Rollback Procedures</li>
          </ul>
          <b-button>View Guide</b-button>
        </div>

        <div class="resource-card">
          <h4>Microservices Architecture</h4>
          <ul>
            <li>Service Design Patterns</li>
            <li>API Gateway Setup</li>
            <li>Service Discovery</li>
            <li>Data Management</li>
            <li>Monitoring and Tracing</li>
            <li>Scaling Strategies</li>
            <li>Fault Tolerance</li>
          </ul>
          <b-button>View Guide</b-button>
        </div>
      </div>
    </div>

    <!-- Video Tutorials Section -->
    <div v-if="activeTab === 'videos'">
      <h2>Video Tutorials</h2>

      <div class="video-section">
        <h3>Getting Started Series</h3>
        <div class="video-grid">
          <div class="video-card">
            <h4>ECS Fundamentals</h4>
            <p>Duration: 2 hours</p>
            <ul>
              <li>Introduction to Containers</li>
              <li>ECS Core Concepts</li>
              <li>Task Definition Basics</li>
              <li>Service Creation</li>
              <li>Live Demo: First Deployment</li>
            </ul>
            <b-button>Watch Series</b-button>
          </div>

          <div class="video-card">
            <h4>Advanced Deployment Strategies</h4>
            <p>Duration: 3 hours</p>
            <ul>
              <li>Blue/Green Deployments</li>
              <li>Canary Releases</li>
              <li>A/B Testing Setup</li>
              <li>Rolling Updates</li>
              <li>Automated Rollbacks</li>
            </ul>
            <b-button>Watch Series</b-button>
          </div>

          <div class="video-card">
            <h4>Security Best Practices</h4>
            <p>Duration: 4 hours</p>
            <ul>
              <li>IAM Deep Dive</li>
              <li>Network Security</li>
              <li>Container Hardening</li>
              <li>Secrets Management</li>
              <li>Compliance Implementation</li>
            </ul>
            <b-button>Watch Series</b-button>
          </div>
        </div>
      </div>

      <div class="video-section">
        <h3>Advanced Topics</h3>
        <div class="video-grid">
          <div class="video-card">
            <h4>Performance Optimization</h4>
            <p>Duration: 2.5 hours</p>
            <ul>
              <li>Resource Optimization</li>
              <li>Cost Management</li>
              <li>Scaling Strategies</li>
              <li>Monitoring Setup</li>
            </ul>
            <b-button>Watch Series</b-button>
          </div>

          <div class="video-card">
            <h4>Troubleshooting</h4>
            <p>Duration: 3 hours</p>
            <ul>
              <li>Common Issues</li>
              <li>Debugging Techniques</li>
              <li>Log Analysis</li>
              <li>Performance Debugging</li>
            </ul>
            <b-button>Watch Series</b-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Practice Labs Section -->
    <div v-if="activeTab === 'labs'">
      <h2>Hands-on Labs</h2>

      <div class="labs-section">
        <h3>Beginner Labs</h3>
        <div class="lab-grid">
          <div class="lab-card">
            <h4>ECS Basics Lab</h4>
            <p>Duration: 2 hours</p>
            <ul>
              <li>Create ECS Cluster</li>
              <li>Define Task Definitions</li>
              <li>Deploy Services</li>
              <li>Configure Load Balancer</li>
              <li>Test Deployments</li>
            </ul>
            <b-button>Start Lab</b-button>
          </div>

          <div class="lab-card">
            <h4>Container Basics</h4>
            <p>Duration: 1.5 hours</p>
            <ul>
              <li>Docker Fundamentals</li>
              <li>Image Building</li>
              <li>Container Management</li>
              <li>Basic Networking</li>
            </ul>
            <b-button>Start Lab</b-button>
          </div>
        </div>

        <h3>Intermediate Labs</h3>
        <div class="lab-grid">
          <div class="lab-card">
            <h4>CI/CD Pipeline Build</h4>
            <p>Duration: 4 hours</p>
            <ul>
              <li>Setup CodePipeline</li>
              <li>Configure CodeBuild</li>
              <li>Implement Testing</li>
              <li>Deploy to ECS</li>
              <li>Monitor Pipeline</li>
            </ul>
            <b-button>Start Lab</b-button>
          </div>

          <div class="lab-card">
            <h4>Advanced Networking</h4>
            <p>Duration: 3 hours</p>
            <ul>
              <li>VPC Setup</li>
              <li>Security Groups</li>
              <li>Load Balancer Config</li>
              <li>Service Discovery</li>
            </ul>
            <b-button>Start Lab</b-button>
          </div>
        </div>

        <h3>Advanced Labs</h3>
        <div class="lab-grid">
          <div class="lab-card">
            <h4>Security Implementation</h4>
            <p>Duration: 5 hours</p>
            <ul>
              <li>IAM Configuration</li>
              <li>Secrets Management</li>
              <li>Security Monitoring</li>
              <li>Audit Logging</li>
              <li>Compliance Checks</li>
            </ul>
            <b-button>Start Lab</b-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tools Section -->
    <div v-if="activeTab === 'tools'">
      <h2>Tools & Downloads</h2>

      <div class="tools-section">
        <h3>Development Tools</h3>
        <div class="tool-grid">
          <div class="tool-card">
            <h4>AWS CLI Tools</h4>
            <ul>
              <li>AWS CLI v2</li>
              <li>ECS CLI</li>
              <li>Session Manager Plugin</li>
              <li>SAM CLI</li>
            </ul>
            <b-button>Download</b-button>
          </div>

          <div class="tool-card">
            <h4>Infrastructure Tools</h4>
            <ul>
              <li>Terraform</li>
              <li>CloudFormation Designer</li>
              <li>CDK Toolkit</li>
            </ul>
            <b-button>Download</b-button>
          </div>

          <div class="tool-card">
            <h4>Container Tools</h4>
            <ul>
              <li>Docker Desktop</li>
              <li>Container Scanner</li>
              <li>Compose CLI</li>
            </ul>
            <b-button>Download</b-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Community Section -->
    <div v-if="activeTab === 'community'">
      <h2>Community Resources</h2>

      <div class="community-section">
        <h3>Discussion Forums</h3>
        <div class="forum-list">
          <div class="forum-card">
            <h4>ECS Forum</h4>
            <p>Active users: 5,000+</p>
            <ul>
              <li>Technical Discussions</li>
              <li>Best Practices</li>
              <li>Troubleshooting Help</li>
              <li>Architecture Reviews</li>
            </ul>
            <b-button>Join Discussion</b-button>
          </div>

          <div class="forum-card">
            <h4>DevOps Community</h4>
            <p>Active users: 3,000+</p>
            <ul>
              <li>CI/CD Pipelines</li>
              <li>Automation Tips</li>
              <li>Tool Recommendations</li>
              <li>Case Studies</li>
            </ul>
            <b-button>Join Discussion</b-button>
          </div>
        </div>

        <h3>Community Projects</h3>
        <div class="project-list">
          <div class="project-card">
            <h4>ECS Tools Collection</h4>
            <ul>
              <li>Deployment Scripts</li>
              <li>Monitoring Tools</li>
              <li>Custom CLIs</li>
              <li>Utility Functions</li>
            </ul>
            <b-button>View Projects</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourceLibrary",
  data() {
    return {
      activeTab: "documentation",
    };
  },
};
</script>

<style scoped>
/* Resources Container */
.resources-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #1a202c;
  min-height: 100vh;
  background: #f7fafc;
}

.resources-container h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
}

.resources-container > p {
  text-align: center;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Navigation Tabs */
.resources-nav {
  margin-bottom: 3rem;
}

.nav-tabs {
  border-bottom: 2px solid #e2e8f0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.nav-item .nav-link {
  color: #4a5568;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.3s ease;
}

.nav-item .nav-link:hover {
  color: #3182ce;
}

.nav-item .nav-link.active {
  color: #3182ce;
  border-bottom: 2px solid #3182ce;
}

/* Section Headers */
h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 2rem 0 1.5rem;
}

/* Resource Cards */
.resource-card,
.video-card,
.lab-card,
.tool-card,
.forum-card,
.project-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.resource-card:hover,
.video-card:hover,
.lab-card:hover,
.tool-card:hover,
.forum-card:hover,
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

/* Card Headers */
.resource-card h4,
.video-card h4,
.lab-card h4,
.tool-card h4,
.forum-card h4,
.project-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

/* Lists within Cards */
.resource-card ul,
.video-card ul,
.lab-card ul,
.tool-card ul,
.forum-card ul,
.project-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.resource-card li,
.video-card li,
.lab-card li,
.tool-card li,
.forum-card li,
.project-card li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.75rem;
  color: #4a5568;
  line-height: 1.5;
}

.resource-card li::before,
.video-card li::before,
.lab-card li::before,
.tool-card li::before,
.forum-card li::before,
.project-card li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #3182ce;
}

/* Grid Layouts */
.doc-section,
.video-section,
.labs-section,
.tools-section,
.community-section {
  margin-bottom: 3rem;
}

.video-grid,
.lab-grid,
.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

/* Buttons */
.btn {
  background: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  transition: background 0.3s ease;
  margin-top: 1rem;
  display: inline-block;
}

.btn:hover {
  background: #2c5282;
  color: white;
}

/* Duration Labels */
.video-card p,
.lab-card p {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

/* Active Users Count */
.forum-card p {
  color: #48bb78;
  font-weight: 500;
  margin-bottom: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .resources-container {
    padding: 1rem;
  }

  .resources-container h1 {
    font-size: 2rem;
  }

  .nav-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 1rem;
  }

  .nav-item .nav-link {
    padding: 0.5rem 1rem;
    white-space: nowrap;
  }

  .video-grid,
  .lab-grid,
  .tool-grid {
    grid-template-columns: 1fr;
  }

  .resource-card,
  .video-card,
  .lab-card,
  .tool-card,
  .forum-card,
  .project-card {
    margin-bottom: 1rem;
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

.resource-card,
.video-card,
.lab-card,
.tool-card,
.forum-card,
.project-card {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Print Styles */
@media print {
  .resources-nav {
    display: none;
  }

  .resources-container {
    padding: 0;
  }

  .btn {
    display: none;
  }
}
</style>
