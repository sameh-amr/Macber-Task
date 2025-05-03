import { createContext, useContext, useState } from 'react';
import { AuthContextType } from '../types/AuthContextType';
import { login as apiLogin } from '../services/auth.service';
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const login = async (email: string, password: string) => {
    const response = await apiLogin(email, password);
    console.log(response)
    setToken(response.data.access_token);
    localStorage.setItem('token', response.data.access_token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) as AuthContextType;