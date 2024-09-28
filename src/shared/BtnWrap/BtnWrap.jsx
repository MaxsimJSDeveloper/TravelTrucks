import css from "./BtnWrap.module.css";

const BtnWrap = ({ type, onClick, children }) => {
  return (
    <button type={type} className={css.btnWrap} onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnWrap;
