import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { FeedbackFormPage } from './pages/public/FeedbackFormPage';
import { LoginPage } from './pages/admin/LoginPage';
import { ProtectedRoute } from './HOC/ProtectedRoute';
import { DashboardPage } from './pages/admin/DashboardPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;