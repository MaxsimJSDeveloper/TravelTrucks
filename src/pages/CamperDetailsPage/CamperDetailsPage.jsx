import { Link, Outlet, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { selectCamper } from "../../redux/campers/selectors";
import Container from "../../components/Container/Container";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import Loader from "../../components/Loader/Loader";
import DetailsNavList from "../../components/DetailsNavList/DetailsNavList";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id[1]));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Container>
          <CamperDetails camper={camper} />
          <DetailsNavList />
        </Container>
      </main>
    </>
  );
};

export default CamperDetailsPage;
