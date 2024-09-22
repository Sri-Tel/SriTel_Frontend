import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://your-api-gateway-url.com',  
});


apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;    
  }
  return config;
});



export const fetchProtectedData = async () => {
  try {
    const response = await apiClient.get('/protected-data'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
