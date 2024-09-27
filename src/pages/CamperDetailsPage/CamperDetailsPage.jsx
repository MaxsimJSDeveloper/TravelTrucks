import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { selectCamper } from "../../redux/campers/selectors";
import Container from "../../components/Container/Container";
import CamperDetails from "../../components/CamperDetails/CamperDetails";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  console.log(camper);

  useEffect(() => {
    dispatch(fetchCamperById(id[1]));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Container>
          <CamperDetails camper={camper} />
        </Container>
      </main>
    </>
  );
};

export default CamperDetailsPage;
