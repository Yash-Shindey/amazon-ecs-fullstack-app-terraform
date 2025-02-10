import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
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

  // Original getAllProducts endpoint for backward compatibility
  getAllProducts() {
    return apiClient.get('/api/getAllProducts');
  }
};
