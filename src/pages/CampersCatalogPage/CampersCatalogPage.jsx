import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";

const CampersCatalogPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <main>
        <h1>CampersCatalogPage</h1>;
      </main>
    </>
  );
};

export default CampersCatalogPage;
