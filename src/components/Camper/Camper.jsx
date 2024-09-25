import css from "./Camper.module.css";

const Camper = ({ camper }) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    transmission,
    engine,
    AC,
    kitchen,
    gallery,
  } = camper;

  return (
    <>
      <div className={css.cardContainer}>
        {gallery.length > 0 && (
          <div className={css.camperImgBox}>
            <img
              className={css.camperImg}
              width={292}
              height={320}
              src={gallery[0].thumb}
              alt="Camper"
            />
          </div>
        )}
        <div>
          <h2>{name}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Location: {location}</p>
          <p>Description: {description}</p>
          <p>Transmission: {transmission}</p>
          <p>Engine: {engine}</p>
          <p>AC: {AC ? "Yes" : "No"}</p>
          <p>Kitchen: {kitchen ? "Yes" : "No"}</p>
        </div>
      </div>
    </>
  );
};

export default Camper;
