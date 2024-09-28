import sprite from "../../img/symbol-defs.svg";
import CamperImg from "../CamperImg/CamperImg";

import { truncateText } from "../../js/truncateText";

import css from "./Camper.module.css";
import { useNavigate } from "react-router-dom";
import { maxDescriptionLength } from "../../js/constans";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/campers/slice";
import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import EquipmentList from "../EquipmentList/EquipmentList";

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
  const navigate = useNavigate();

  return (
    <>
      <div className={css.cardContainer}>
        <CamperImg gallery={gallery} showSingle={true} />
        <div className={css.camperInfo}>
          <div className={css.mainInfo}>
            <p>{name}</p>
            <div className={css.stats}>
              <p>&euro;{price}.00</p>
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
          <div className={css.addInfo}>
            <div className={css.addInfoItem}>
              <svg className={css.addInfoIcon}>
                <use xlinkHref={`${sprite}#${"icon-star-active"}`} />
              </svg>
              <p>
                {rating}({reviews.length} Reviews)
              </p>
            </div>
            <div className={css.addInfoItem}>
              <svg className={css.addInfoIcon}>
                <use xlinkHref={`${sprite}#${"icon-map"}`} />
              </svg>
              <p>{location}</p>
            </div>
          </div>
          <p className={css.description}>
            {truncateText(description, maxDescriptionLength)}
          </p>
          <EquipmentList {...equipmentProps} />
          <BtnWrap type={"button"} onClick={() => navigate(`/catalog/:${id}`)}>
            Show more
          </BtnWrap>
        </div>
      </div>
    </>
  );
};

export default Camper;
