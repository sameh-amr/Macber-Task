// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { FeedbackFormPage } from './pages/public/FeedbackFormPage';
import { LoginPage } from './pages/admin/LoginPage';
import { ProtectedRoute } from './HOC/ProtectedRoute';
import { DashboardPage } from './pages/admin/DashboardPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components/common/Header/Header';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<FeedbackFormPage />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;