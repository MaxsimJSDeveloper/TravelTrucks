import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

import { fetchCamperById } from "../../redux/campers/operations";
import { selectCamper } from "../../redux/campers/selectors";
import Container from "../../shared/Container/Container";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import DetailsNavList from "../../components/DetailsNavList/DetailsNavList";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id[1]));
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>Camper Details</title>
        <meta name="description" content={`Details of camper with ID: ${id}`} />
      </Helmet>
      <Container>
        <CamperDetails camper={camper} />
        <DetailsNavList />
      </Container>
    </>
  );
};

export default CamperDetailsPage;
