import { useNavigate } from "react-router-dom";

import BtnWrap from "../../shared/BtnWrap/BtnWrap";

import css from "./HomePage.module.css";
import HomePageContent from "../../components/HomePageContent/HomePageContent";
import Container from "../../shared/Container/Container";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className={css.homePage}>
      <Container>
        <div className={css.homePageContainer}>
          <HomePageContent />
          <BtnWrap type={"button"} onClick={() => navigate("/catalog")}>
            View Now
          </BtnWrap>
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
