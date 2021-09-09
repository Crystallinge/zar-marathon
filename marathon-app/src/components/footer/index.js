import s from "./style.module.css";

const Footer = ({ title, descr }) => {
  return (
    <footer>
      <div className={s.wrapper}>
        {title && <h3>{title}</h3>}
        {descr && <p>{descr}</p>}
      </div>
    </footer>
  );
};

export default Header;
