import css from "./BtnWrap.module.css";

const BtnWrap = ({
  type = "button",
  onClick,
  children,
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      className={`${css.btnWrap} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BtnWrap;
