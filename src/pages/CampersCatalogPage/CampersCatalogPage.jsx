import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import useCampers from "../../hooks/useCampers";
import Container from "../../components/Container/Container";
import Sidebar from "../../components/Sidebar/Sidebar";

import css from "./CampersCatalogPage.module.css";

const CampersCatalogPage = () => {
  const { campers, isLoading, hasMoreCampers, handleLoadMore } = useCampers();

  return (
    <>
      <Header />
      <main>
        <Container>
          {isLoading && <Loader />}
          <div className={css.mainWrap}>
            <Sidebar />
            <div className={css.listWrap}>
              <CampersList campers={campers} />
              {hasMoreCampers && (
                <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
              )}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default CampersCatalogPage;
