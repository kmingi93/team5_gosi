import { BrowserRouter } from "react-router-dom";
import "assets/styles/reset.css";
import "assets/styles/common.css";
import "App.css";
import Header from "components/common/header";
import "../node_modules/slick-carousel/slick/slick.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
