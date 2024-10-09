import { useDispatch, useSelector } from "react-redux";

import CamperImg from "../CamperImg/CamperImg";
import CamperInfo from "../CamperInfo/CamperInfo";
import EquipmentList from "../EquipmentList/EquipmentList";
import BtnWrap from "../../shared/BtnWrap/BtnWrap";

import { addToFavorites, removeFromFavorites } from "../../redux/campers/slice";
import { truncateText } from "../../js/truncateText";
import { maxDescriptionLength } from "../../js/constans";

import sprite from "../../img/symbol-defs.svg";
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
    reviews,
  } = camper;

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.some((favorite) => favorite.id === id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(camper));
    } else {
      dispatch(addToFavorites(camper));
    }
  };

  const equipmentProps = { transmission, engine, AC, kitchen };

  return (
    <div className={css.cardContainer}>
      <CamperImg gallery={gallery} showSingle={true} />
      <div className={css.camperInfo}>
        <div className={css.mainInfo}>
          <p>{name}</p>
          <div className={css.stats}>
            <p>
              <p>&euro;{price.toFixed(2)}</p>
            </p>
            <button className={css.toggleBtn} onClick={handleFavoriteToggle}>
              <svg className={css.likeIcon}>
                <use
                  xlinkHref={`${sprite}#${
                    isFavorite ? "icon-like-fully" : "icon-like"
                  }`}
                />
              </svg>
            </button>
          </div>
        </div>
        <CamperInfo rating={rating} location={location} reviews={reviews} />
        <p className={css.description}>
          {truncateText(description, maxDescriptionLength)}
        </p>
        <EquipmentList {...equipmentProps} />
        <BtnWrap where={`/catalog/:${id}`}>Show more</BtnWrap>
      </div>
    </div>
  );
};

export default Camper;
