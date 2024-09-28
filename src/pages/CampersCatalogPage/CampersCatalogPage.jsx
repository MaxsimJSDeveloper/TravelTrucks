import Loader from "../../components/Loader/Loader";
import CampersList from "../../components/CampersList/CampersList";
import useCampers from "../../hooks/useCampers";
import Container from "../../shared/Container/Container";
import Sidebar from "../../components/Sidebar/Sidebar";

import css from "./CampersCatalogPage.module.css";
import BtnWrap from "../../shared/BtnWrap/BtnWrap";

const CampersCatalogPage = () => {
  const { campers, isLoading, hasMoreCampers, handleLoadMore } = useCampers();

  return (
    <main>
      <Container>
        {isLoading && <Loader />}
        <div className={css.mainWrap}>
          <Sidebar />
          <div className={css.listWrap}>
            <CampersList campers={campers} />
            {hasMoreCampers && (
              <BtnWrap
                onClick={handleLoadMore}
                disabled={isLoading}
                className={css.loadMoreBtn}
              >
                {isLoading ? "Loading..." : "Load More"}
              </BtnWrap>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CampersCatalogPage;
