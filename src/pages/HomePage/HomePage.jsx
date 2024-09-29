import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import Container from "../../shared/Container/Container";
import HomePageContent from "../../components/HomePageContent/HomePageContent";

import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the Home Page" />
      </Helmet>
      <div className={css.homePage}>
        <Container>
          <div className={css.homePageContainer}>
            <HomePageContent />
            <BtnWrap type="button" onClick={() => navigate("/catalog")}>
              View Now
            </BtnWrap>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
