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
    <div className={css.camperImgBox}>
      {gallery.map((image, index) => (
        <img
          key={index}
          className={css.camperImg}
          width={292}
          height={320}
          src={image.thumb}
          alt={`Camper ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CamperImg;
