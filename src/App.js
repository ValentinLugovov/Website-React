import a from "./App.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Auth from "./Auth/Auth";

function App() {
  return (
    <div className={a.wrapper}>
      <Header />
      <Auth />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
