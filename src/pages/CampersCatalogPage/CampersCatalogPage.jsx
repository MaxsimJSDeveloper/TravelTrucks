import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import useCampers from "../../hooks/useCampers";
import Container from "../../components/Container/Container";
import Sidebar from "../../components/Sidebar/Sidebar";

const CampersCatalogPage = () => {
  const { campers, isLoading, hasMoreCampers, handleLoadMore } = useCampers();

  return (
    <>
      <Header />
      <main>
        <Container>
          {isLoading && <Loader />}
          <div style={{ display: "flex" }}>
            <Sidebar />
            <div>
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
