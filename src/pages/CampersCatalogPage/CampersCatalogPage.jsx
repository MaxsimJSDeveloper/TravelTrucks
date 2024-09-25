import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";

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
        <div style={{ paddingLeft: 64, paddingRight: 64 }}>
          <CampersList />
        </div>
      </main>
    </>
  );
};

export default CampersCatalogPage;
