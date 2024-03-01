import "./styles.css";
import Nav from "./react_components/navigation.jsx";
import Home from "./react_components/home.jsx";
import Footer from "./react_components/footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />

      <Footer />
    </div>
  );
}
