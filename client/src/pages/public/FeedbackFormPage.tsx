import { useState } from 'react';
import { Input } from '../../components/common/Input';
import { StarRating } from '../../components/common/StarRating';
import { submitFeedback } from '../../services/feedback.service';
import { toast } from 'react-toastify';

export const FeedbackFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 3,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitFeedback(formData);
      toast.success('Feedback submitted successfully!');
      setFormData({ name: '', email: '', message: '', rating: 3 });
    } catch (error) {
      toast.error('Submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Feedback Form</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <StarRating
            rating={formData.rating}
            onRatingChange={(rating) => setFormData({ ...formData, rating })}
          />
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};