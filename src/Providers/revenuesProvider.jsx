import { createContext, useContext, useState } from 'react';

const RevenuesContext = createContext();

export const RevenuesProvider = ({ children }) => {
  const [revenues, setRevenues] = useState([]);

  return (
    <RevenuesContext.Provider
      value={{
        revenues,
        setRevenues,
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
