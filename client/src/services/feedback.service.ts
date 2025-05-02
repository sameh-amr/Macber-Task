import axios from 'axios';
import { API_URL } from './apis.constants';
import { FeedbackDto } from '../types/FeedbackDto';
export const submitFeedback = async (feedback: Omit<FeedbackDto, 'id'>) => {
    return axios.post(`${API_URL}/feedbacks`, feedback);
  };
  
  export const fetchFeedbacks = async (token: string) => {
    return axios.get(`${API_URL}/feedbacks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };