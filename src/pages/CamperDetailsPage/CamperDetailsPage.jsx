import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { selectCamper } from "../../redux/campers/selectors";
import Container from "../../shared/Container/Container";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import DetailsNavList from "../../components/DetailsNavList/DetailsNavList";
import { Helmet } from "react-helmet-async";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id[1]));
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Camper Details</title>
        <meta name="description" content={`Details of camper with ID: ${id}`} />
      </Helmet>
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
