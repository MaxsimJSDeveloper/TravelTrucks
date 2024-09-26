import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, isLoading }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Load More"}
    </button>
  );
};

export default LoadMoreBtn;
