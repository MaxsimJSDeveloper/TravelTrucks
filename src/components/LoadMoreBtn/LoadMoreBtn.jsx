const LoadMoreBtn = ({ onClick, isLoading }) => {
  return (
    <button onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Load More"}
    </button>
  );
};

export default LoadMoreBtn;
