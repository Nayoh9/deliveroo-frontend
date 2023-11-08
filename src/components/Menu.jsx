const Menu = ({ data, cart, setCart }) => {
  // console.log(data);
  // console.log(cart);
  // console.log(setCart);

  // Fonction de gestion qui gère l'affichage dans le cart
  const handleAddInCart = (elemMeal) => {
    // Copie du tableau avant modification
    const copyCart = [...cart];

    // Méthode .find pour verifier si une des itérations du tableau à le meme id que le elemMeal.id qu'on s'apprete à ajouter
    let mealInCart = copyCart.find((elem) => elem.id === elemMeal.id);
    console.log(mealInCart);

    // Si la valeur undifined est renvoyée par la méthode, alors ça veut dire qu'il n'a pas trouvé d'id similaire
    if (mealInCart === undefined) {
      // Dans ce cas je fais une copie de elemMeal et je lui ajoute une quantity égale à 1
      const elemMealToPush = { ...elemMeal, quantity: 1 };
      // Je push ensuite mon elemMeal et sa quantity dans mon tableau
      copyCart.push(elemMealToPush);
      // Si la méthode détecte un id correspondant alors je prends sa clef quantity que j'incrémente de 1
    } else {
      mealInCart.quantity++;
    }
    // Dans tous les cas, je réactualise mon state de tableau
    setCart(copyCart);
  };

  // Gestion de l'affichage du menu

  return (
    <div className="menu">
      {data.map((elem) => {
        if (elem.meals.length !== 0) {
          return (
            <div className="categories" key={elem.name}>
              <h2 className="name">{elem.name}</h2>

              {elem.meals.map((elemMeal) => {
                return (
                  <div
                    className="meals"
                    key={elemMeal.id}
                    //Gestion de l'affichage des articles affichés dans le cart
                    onClick={() => {
                      handleAddInCart(elemMeal);
                    }}
                  >
                    <p>{elemMeal.title}</p>
                    <p>{elemMeal.description}</p>
                    <p>{elemMeal.price}</p>
                    <img src={elemMeal.url} alt="" />
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
