const Section = ({ title, text, img }) => {
  return (
    <section>
      <span>
        <h1>{title}</h1>
        <p>{text}</p>
      </span>
      <div>{img}</div>
    </section>
  );
};

export default Section;
