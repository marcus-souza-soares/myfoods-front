import GlobalStyle from "./Themes/GlobalStyle";
import { BrowserRouter } from 'react-router-dom';
import { HandleRoute } from "./Routes/HandleRouter";
import { AuthProvider } from "./Providers/AuthProvider";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <HandleRoute />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
