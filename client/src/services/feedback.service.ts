import axios from 'axios';
import { API_URL } from './apis.constants';
import { FeedbackType } from '../types/FeedbackType';
export const submitFeedback = async (feedback: Omit<FeedbackType, 'id'>) => {
    return axios.post(`${API_URL}/feedbacks`, feedback);
  };
  
  export const fetchFeedbacks = async (token: string): Promise<FeedbackType[]> => {
    const response = await axios.get(`${API_URL}/feedbacks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; 
  };
  
  export const getFeedbackById = async (id: string, token: string): Promise<FeedbackType> => {
    const response = await axios.get(`${API_URL}/feedbacks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };