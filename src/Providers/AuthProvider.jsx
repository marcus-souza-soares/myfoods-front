import { createContext, useContext, useEffect, useState } from 'react';

import { alert } from '../Helpers/alert';
import { Navigate } from 'react-router-dom';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem('LinkrAuthUser');
    const storagedToken = localStorage.getItem('LinkrAuthToken');

    if (storagedUser && storagedToken) {
      setUserData(JSON.parse(storagedUser));
    }
  }, []);

  const logout = (sessionExpired = true) => {
    if (sessionExpired) {
      alert('error', 'Your session expired', 'Log in again!');
    }
    localStorage.removeItem('LinkrAuthUser');
    localStorage.removeItem('LinkrAuthToken');
    setUserData(null);
  };
  const errorMessage = (msg) => {
    console.log(msg)
    if (msg === "Error ao validar o usuário" || msg === "Acesso não autorizado.") {
      return logout();
    }
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!userData,
        userData,
        setUserData,
        logout,
        errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
