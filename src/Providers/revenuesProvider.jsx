import { createContext, useContext, useState } from 'react';

const RevenuesContext = createContext();

export const RevenuesProvider = ({ children }) => {
  const [revenues, setRevenues] = useState([]);
  const [loading, setLoading] = useState(false)
  const defaulPicture = "https://app.rallybright.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";

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
