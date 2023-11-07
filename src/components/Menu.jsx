const Menu = ({ tab, cart, setCart }) => {
  // console.log(tab);
  // console.log(cart);
  // console.log(setCart);

  return (
    <div className="menu">
      {tab.map((elem) => {
        if (elem.meals.length !== 0) {
          return (
            <div className="categories" key={elem.name}>
              <h2 className="name">{elem.name}</h2>

              {elem.meals.map((elemMeals) => {
                return (
                  <div
                    className="meals"
                    key={elemMeals.id}
                    onClick={() => {
                      const newCart = [...cart];
                      newCart.push(
                        <div className="cartMeals" key={elemMeals.id}>
                          <span>{elemMeals.title}</span>
                          <span>{elemMeals.price}</span>
                        </div>
                      );
                      setCart(newCart);
                    }}
                  >
                    <p>{elemMeals.title}</p>
                    <p>{elemMeals.description}</p>
                    <p>{elemMeals.price}</p>
                    <img src={elemMeals.url} alt="" />
                  </div>
                );
              })}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Menu;
