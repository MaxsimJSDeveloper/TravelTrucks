import { useNavigate } from "react-router-dom";
import BtnWrap from "../../components/BtnWrap/BtnWrap";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className={css.homePage}>
      <div style={{ paddingLeft: 64, paddingRight: 64 }}>
        <div className={css.homePageContainer}>
          <div className={css.infoContainer}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.info}>
              You can find everything you want in our catalog
            </p>
          </div>
          <BtnWrap navigate={() => navigate("/catalog")}>View Now</BtnWrap>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
