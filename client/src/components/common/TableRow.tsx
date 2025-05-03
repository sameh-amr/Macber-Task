import { FeedbackType } from "../../types/FeedbackType";
import { StarRating } from "../dashboards/StarRating";


export const TableRow = ({ feedback }: { feedback: FeedbackType }) => (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{feedback.id}</div>
      </td>
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