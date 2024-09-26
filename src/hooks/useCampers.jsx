import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectCurrentPage,
  selectIsLoading,
  selectTotal,
} from "../redux/campers/selectors";
import { fetchCampers } from "../redux/campers/operations";
import { incrementPage } from "../redux/campers/slice";
import { useEffect } from "react";

const useCampers = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const total = useSelector(selectTotal);

  const limit = 4;
  const hasMoreCampers = campers.length < total;

  const loadCampers = () => {
    const filter = {
      page: currentPage,
      limit,
    };
    dispatch(fetchCampers(filter));
  };

  useEffect(() => {
    loadCampers();
  }, [currentPage, dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return { campers, isLoading, hasMoreCampers, handleLoadMore };
};

export default useCampers;
