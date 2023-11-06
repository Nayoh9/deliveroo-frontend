import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get(
        "https://site--deliveroo-backend--s7xgqdjwl4w7.code.run/"
      );
      setData(response.data);
      console.log(data);
    };

    requestData();
  }, []);

  console.log("composant se render");
  return (
    <>
      <Header />
      <Section
        title="Je suis le titre"
        text="Je suis le text"
        img="Je suis une image"
      ></Section>
    </>
  );
}

export default App;
