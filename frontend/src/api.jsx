// Api.jsx
import axios from 'axios';

// Axios instance with base URL for API requests
export const api = axios.create({
  baseURL: 'http://localhost:4000', // Update to match your actual server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Function to handle user login.
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 */

export const setAuthToken = token => {
    if (token) {
      // Apply the token to every request if logged in
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      // Delete auth header if not logged in
      delete api.defaults.headers.common['Authorization'];
    }
  };

  
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to handle user registration (for instructors and admins).
 * @param {Object} userData - Object containing user data.
 */
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to change the user's password.
 * @param {string} oldPassword - Current password.
 * @param {string} newPassword - New password.
 */
export const changePassword = async (oldPassword, newPassword) => {
  try {
    const response = await api.post('/auth/change-password', { oldPassword, newPassword });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to update profile details.
 * @param {Object} profileData - Object containing new profile details.
 */
export const updateProfile = async (profileData) => {
  try {
    const response = await api.put('/user/profile', profileData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to log out a user.
 */
export const logoutUser = async () => {
  try {
    const response = await api.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to fetch assessment data.
 */
export const fetchAssessments = async () => {
  try {
    const response = await api.get('/assessments/fetch');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to save assessment data.
 * @param {Object} assessmentData - Data related to a specific assessment.
 */
export const saveAssessment = async (assessmentData) => {
  try {
    const response = await api.post('/assessments/save', assessmentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to delete an assessment.
 * @param {string} assessmentId - ID of the assessment to be deleted.
 */
export const deleteAssessment = async (assessmentId) => {
  try {
    const response = await api.delete(`/assessments/delete/${assessmentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to fetch user management details (for admins).
 */
export const fetchUserDetails = async () => {
  try {
    const response = await api.get('/admin/users');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function to update system settings (for admins).
 * @param {Object} settingsData - New system settings.
 */
export const updateSystemSettings = async (settingsData) => {
  try {
    const response = await api.put('/system/settings', settingsData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// More API functions can be added here based on your project requirements

