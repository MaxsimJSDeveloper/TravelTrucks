import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import useCampers from "../../hooks/useCampers";
import Container from "../../components/Container/Container";

const CampersCatalogPage = () => {
  const { campers, isLoading, hasMoreCampers, handleLoadMore } = useCampers();

  return (
    <>
      <Header />
      <main>
        <Container>
          {isLoading && <Loader />}
          <CampersList campers={campers} />
          {hasMoreCampers && (
            <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
          )}
        </Container>
      </main>
    </>
  );
};

export default CampersCatalogPage;
