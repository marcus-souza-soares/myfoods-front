import { createContext, useContext, useState } from 'react';

const RevenuesContext = createContext();

export const RevenuesProvider = ({ children }) => {
  const [revenues, setRevenues] = useState([]);
  const [loading, setLoading] = useState(false)
  // const defaulPicture = "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg"
  const defaulPicture = "https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2.png";

  return (
    <RevenuesContext.Provider
      value={{
        revenues,
        setRevenues,
        loading,
        setLoading,
        defaulPicture
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
