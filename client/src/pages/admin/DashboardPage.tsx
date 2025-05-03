import { useEffect, useState } from 'react';
import { fetchFeedbacks } from '../../services/feedback.service';
import { useAuth } from '../../contexts/AuthContext';
import { FeedbackType } from '../../types/FeedbackType';

export const DashboardPage = () => {
  const { token } = useAuth();
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setIsLoading(true);
      fetchFeedbacks(token)
        .then((res: FeedbackType[]) => setFeedbacks(res))
        .finally(() => setIsLoading(false));
    }
  }, [token]);

  // Mobile-first responsive design
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h1 className="text-lg font-semibold text-gray-900 md:text-xl">
              Feedback Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {feedbacks.length} total submissions
            </p>
          </div>

          {/* Loading state */}
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-sm text-gray-500">Loading feedback...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {/* Desktop Table */}
              <table className="hidden md:table min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Rating</TableHeader>
                    <TableHeader>Date</TableHeader>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {feedbacks.map((feedback) => (
                    <TableRow key={feedback.id} feedback={feedback} />
                  ))}
                </tbody>
              </table>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4 p-4">
                {feedbacks.map((feedback) => (
                  <MobileFeedbackCard key={feedback.id} feedback={feedback} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable Components for better organization
const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <th
    scope="col"
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    {children}
  </th>
);

const TableRow = ({ feedback }: { feedback: FeedbackType }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm font-medium text-gray-900">{feedback.name}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">{feedback.email}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <span className="text-sm text-gray-900 mr-1">{feedback.rating}</span>
        <StarRating rating={feedback.rating} />
      </div>
    </td>
  </tr>
);

const MobileFeedbackCard = ({ feedback }: { feedback: FeedbackType }) => (
  <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-sm font-medium text-gray-900">{feedback.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{feedback.email}</p>
      </div>
      <div className="flex items-center">
        <span className="text-xs font-medium mr-1">{feedback.rating}</span>
        <StarRating rating={feedback.rating} size="small" />
      </div>
    </div>
    <p className="text-sm text-gray-700 mt-2 line-clamp-2">{feedback.message}</p>
  
  </div>
);

const StarRating = ({
  rating,
  size = "default",
}: {
  rating: number;
  size?: "default" | "small";
}) => {
  const starSize = size === "small" ? "text-sm" : "text-base";
  return (
    <div className={`flex ${starSize} text-yellow-400`}>
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};