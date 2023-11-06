import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
// import Main from "./components/Main";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState();
  // const [isPopular, setIsPopular] = useState(false);

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get(
        "https://site--deliveroo-backend--s7xgqdjwl4w7.code.run/"
      );

      setData(response.data);
      setIsLoading(false);
      // jattribue data categories à tabData
      const tabData = response.data.categories;
      // je fais une copy de tabdata dans un autre tableau
      const copyTabData = [...tabData];
      // Je supprime tous les elements après l'index 6
      copyTabData.splice(6);
      // J'attribue à mon stata tab le tableau que je viens de copier
      setTab(copyTabData);
    };

    requestData();
  }, []);

  console.log(tab);

  return isLoading ? (
    <p className="loading">Loading page</p>
  ) : (
    <>
      <Header />
      <Section
        title={data.restaurant.name}
        text={data.restaurant.description}
        img={data.restaurant.picture}
      ></Section>
      <div className="container">
        <div className="menu">
          {tab.map((elem) => {
            return (
              <div className="categories" key={elem.name}>
                <h2 className="name">{elem.name}</h2>

                {elem.meals.map((elemMeals) => {
                  return (
                    <div className="meals" key={elemMeals.id}>
                      <p>{elemMeals.title}</p>
                      <p>{elemMeals.description}</p>
                      <p>{elemMeals.price}</p>
                      <img src={elemMeals.url} alt="" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
