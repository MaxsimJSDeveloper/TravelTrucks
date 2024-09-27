import sprite from "../../img/symbol-defs.svg";
import CamperImg from "../CamperImg/CamperImg";

import { EquipmentList } from "../EquipmentList/EquipmentList";

import { truncateText } from "../../js/truncateText";
import BtnWrap from "../BtnWrap/BtnWrap";

import css from "./Camper.module.css";
import { useNavigate } from "react-router-dom";
import { maxDescriptionLength } from "../../js/constans";

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
              <svg className={css.likeIcon}>
                <use xlinkHref={`${sprite}#${"icon-like"}`} />
              </svg>
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
