import s from "./style.module.css";

const Header = ({ title, descr, urlBg, colorBg }) => {
  const styleRoot = urlBg
    ? { backgroundImage: urlBg }
    : { backgroundColor: colorBg };
  return (
    <section className={s.root} style={styleRoot}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator} />
          </div>
          <div className={(s.desc, s.full)}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Header;
