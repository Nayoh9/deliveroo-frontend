const Menu = (tab) => {
  console.log(tab);
  return (
    <div className="menu">
      {tab.map((elem) => {
        if (elem.meals.length !== 0) {
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
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Menu;
