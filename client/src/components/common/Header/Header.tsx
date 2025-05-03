import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "./logo192.png";

export const Header = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  console.log(token);

  const handleAuthAction = () => {
    if (token) {
      logout();
      navigate("/");
    } else {
      navigate("/admin/login");
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Company Logo" />
          </div>

          <div className="ml-4 flex items-center">
            <button
              onClick={handleAuthAction}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {token ? "Logout" : "Admin Login"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
