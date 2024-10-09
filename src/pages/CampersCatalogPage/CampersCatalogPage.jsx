import { Helmet } from "react-helmet-async";

import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import CampersList from "../../components/CampersList/CampersList";
import Container from "../../shared/Container/Container";
import Loader from "../../components/Loader/Loader";
import Sidebar from "../../components/Sidebar/Sidebar";
import useCampers from "../../hooks/useCampers";

import css from "./CampersCatalogPage.module.css";

const CampersCatalogPage = () => {
  const { campers, isLoading, hasMoreCampers, handleLoadMore } = useCampers();

  return (
    <>
      <Helmet>
        <title>Campers Catalog</title>
        <meta name="description" content="Browse our campers catalog" />
      </Helmet>
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
                isBtn={true}
              >
                {isLoading ? "Loading..." : "Load More"}
              </BtnWrap>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default CampersCatalogPage;
