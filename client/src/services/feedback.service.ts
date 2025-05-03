
import { FeedbackType } from '../types/FeedbackType';
import { API_URL, axiosInstance } from './apis.constants';
export const submitFeedback = async (feedback: Omit<FeedbackType, 'id'>) => {
    return axiosInstance.post(`${API_URL}/feedbacks`, feedback);
  };
  
  export const fetchFeedbacks = async (token: string): Promise<FeedbackType[]> => {
    const response = await axiosInstance.get(`${API_URL}/feedbacks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; 
  };
  
  export const getFeedbackById = async (id: string, token: string): Promise<FeedbackType> => {
    const response = await axiosInstance.get(`${API_URL}/feedbacks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };