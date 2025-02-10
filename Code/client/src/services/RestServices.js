import axios from 'axios';

// Use the ALB server URL from terraform output
const apiClient = axios.create({
  baseURL: 'http://alb-dev-env-ser-1498127656.us-east-1.elb.amazonaws.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getAllCourses() {
    return apiClient.get('/api/courses');
  },
  
  getCourse(id) {
    return apiClient.get(`/api/courses/${id}`);
  },
  
  getResources() {
    return apiClient.get('/api/resources');
  },
  
  getAllProducts() {
    return apiClient.get('/api/getAllProducts');
  }
};