import { createContext, useContext, useState } from 'react';

const RevenuesContext = createContext();

export const RevenuesProvider = ({ children }) => {
  const [revenues, setRevenues] = useState([]);
  const [loading, setLoading] = useState(false)

  return (
    <RevenuesContext.Provider
      value={{
        revenues,
        setRevenues,
        loading,
        setLoading
      }}
    >
      {children}
    </RevenuesContext.Provider>
  );
};

export const useRevenues = () => {
  const context = useContext(RevenuesContext);
  return context;
};
