import { useNavigate } from "react-router-dom";

import BtnWrap from "../../components/BtnWrap/BtnWrap";
import Header from "../../components/Header/Header";

import css from "./HomePage.module.css";
import HomePageContent from "../../components/HomePageContent/HomePageContent";
import Container from "../../components/Container/Container";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className={css.homePage}>
        <Container>
          <div className={css.homePageContainer}>
            <HomePageContent />
            <BtnWrap navigate={() => navigate("/catalog")}>View Now</BtnWrap>
          </div>
        </Container>
      </main>
    </>
  );
};

export default HomePage;
