import { useEffect, useState } from 'react';
import { fetchFeedbacks, getFeedbackById } from '../../services/feedback.service';
import { useAuth } from '../../contexts/AuthContext';
import { FeedbackType } from '../../types/FeedbackType';
import { toast } from 'react-toastify';
import { MobileFeedbackCard } from '../../components/dashboards/MobileFeedbackCard';
import { TableHeader } from '../../components/common/TableHeader';
import { TableRow } from '../../components/common/TableRow';
export const DashboardPage = () => {
  const { token } = useAuth();
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchId, setSearchId] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (token && !isSearching) {
      loadAllFeedbacks();
    }
  }, [token]);

  const loadAllFeedbacks = () => {
    setIsLoading(true);
    fetchFeedbacks(token!)
      .then((res: FeedbackType[]) => setFeedbacks(res))
      .finally(() => setIsLoading(false));
  };

  const handleSearch = () => {
    if (!searchId.trim()) {
      loadAllFeedbacks();
      return;
    }

    setIsSearching(true);
    setIsLoading(true);
    
    getFeedbackById(searchId, token!)
      .then((feedback) => {
        setFeedbacks([feedback]);
      })
      .catch(() => {
        toast.error('Feedback not found');
        setFeedbacks([]);
      })
      .finally(() => {
        setIsLoading(false);
        setIsSearching(false);
      });
  };

  const handleReset = () => {
    setSearchId('');
    loadAllFeedbacks();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-lg font-semibold text-gray-900 md:text-xl">
                  Feedback Dashboard
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  {feedbacks.length} {isSearching ? 'search result' : 'total submissions'}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search by Feedback ID"
                    className="w-full pl-3 pr-20 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {searchId && (
                    <button
                      onClick={handleReset}
                      className="absolute inset-y-0 right-11 flex items-center px-2 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  )}
                </div>
                <button
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isLoading ? 'Searching...' : 'Search'}
                </button>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-sm text-gray-500">
                {isSearching ? 'Searching feedback...' : 'Loading feedback...'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {/* Desktop Table */}
              <table className="hidden md:table min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <TableHeader>Id</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Rating</TableHeader>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {feedbacks.map((feedback) => (
                    <TableRow key={feedback.id} feedback={feedback} />
                  ))}
                </tbody>
              </table>

              <div className="md:hidden space-y-4 p-4">
                {feedbacks.length > 0 ? (
                  feedbacks.map((feedback) => (
                    <MobileFeedbackCard key={feedback.id} feedback={feedback} />
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No feedback found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};






