import css from "./HomePageContent.module.css";

const HomePageContent = () => {
  return (
    <div className={css.homePageContainer}>
      <div className={css.infoContainer}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.info}>
          You can find everything you want in our catalog
        </p>
      </div>
    </div>
  );
};

export default HomePageContent;
