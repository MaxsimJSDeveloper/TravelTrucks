import { Helmet } from "react-helmet-async";

import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import Container from "../../shared/Container/Container";
import HomePageContent from "../../components/HomePageContent/HomePageContent";

import css from "./HomePage.module.css";

const HomePage = () => {
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
            <BtnWrap where={"/catalog"}>View Now</BtnWrap>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
