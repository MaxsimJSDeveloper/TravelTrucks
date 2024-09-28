import Header from "../../components/Header/Header";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default SharedLayout;
