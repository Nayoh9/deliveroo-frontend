const Section = ({ title, text, img }) => {
  return (
    <section>
      <span>
        <h1>{title}</h1>
        <p>{text}</p>
      </span>
      <img className="imageSection" src={img} alt="" />
    </section>
  );
};

export default Section;
