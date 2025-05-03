import { FeedbackType } from "../../types/FeedbackType";
import { StarRating } from "./StarRating";
export const MobileFeedbackCard = ({ feedback }: { feedback: FeedbackType }) => (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{feedback.name}</h3>
          <p className="text-xs text-gray-500 mt-1">ID: {feedback.id}</p>
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