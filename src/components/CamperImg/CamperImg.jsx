import css from "./CamperImg.module.css";

const CamperImg = ({ gallery, showSingle }) => {
  if (gallery.length === 0) return null;

  return showSingle ? (
    <div className={css.camperImgBox}>
      <img
        className={css.camperImg}
        width={292}
        height={320}
        src={gallery[0].thumb}
        alt="Camper"
      />
    </div>
  ) : (
    <ul className={css.camperDetailList}>
      {gallery.map((image, index) => (
        <li key={index} className={css.camperImgItem}>
          <div className={css.camperImgBox}>
            <img
              className={css.camperImg}
              width={292}
              height={320}
              src={image.thumb}
              alt={`Camper ${index + 1}`}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperImg;
