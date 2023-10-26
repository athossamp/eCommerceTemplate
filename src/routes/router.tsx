import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "../components/Footer/Footer";
import { RouterAllRoutes } from "./RouterAllRoutes";
import { Support } from "../components/Support/Support";

function RoutesPages() {
  return (
    <div>
      <Header />
      <Router>
        <RouterAllRoutes />
      </Router>
      <Support />
      <Footer />
    </div>
  );
}
export default RoutesPages;
