import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Menu from "./components/Menu";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--s7xgqdjwl4w7.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
        // // jattribue data categories à tabData
        const tabData = response.data.categories;
        setTab(tabData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // console.log(tab);

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
        <Menu tab={tab} cart={cart} setCart={setCart} />

        <div className="cart">
          <div>
            <button>Valider mon panier</button>
            <div>{cart}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
