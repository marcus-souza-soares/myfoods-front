import GlobalStyle from "./Themes/GlobalStyle";
import { BrowserRouter } from 'react-router-dom';
import { HandleRoute } from "./Routes/HandleRouter";


function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <HandleRoute />
      </BrowserRouter>
  );
}

export default App;
