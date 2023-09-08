import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// Components
import MainContainer from "../components/MainContainer";
import Header from "../components/Header/Header";

// Styles
import globalStyles from "../styles/painting.module.css";

const Home = () => {



  const theme = useSelector((state: RootState) => state.theme);

  return (
      <main className={`App ${theme === "dark" ? globalStyles.darkBackground : ""}`}>
        <Header />
        <MainContainer />
      </main>
  );
};

export default Home;
