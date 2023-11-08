import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--s7xgqdjwl4w7.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
        <Menu data={data.categories} cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} />
      </div>
    </>
  );
}

export default App;
