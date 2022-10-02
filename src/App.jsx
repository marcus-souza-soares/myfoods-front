import GlobalStyle from "./Themes/GlobalStyle";
import { BrowserRouter } from 'react-router-dom';
import { HandleRoute } from "./Routes/HandleRouter";
import { AuthProvider } from "./Providers/AuthProvider";
import { RevenuesProvider } from "./Providers/revenuesProvider";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <RevenuesProvider>
          <HandleRoute />
        </RevenuesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
