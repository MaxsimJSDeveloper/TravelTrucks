import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";

const CampersCatalogPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return isLoading ? <Loader /> : <h1>CampersCatalogPage</h1>;
};

export default CampersCatalogPage;
