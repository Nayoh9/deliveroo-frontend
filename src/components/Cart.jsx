const Cart = ({ cart, setCart }) => {
  // console.log(cart);

  const handleAddInCart = (elemMeal) => {
    const copyCart = [...cart];
    let mealInCart = copyCart.find((elem) => elem.id === elemMeal.id);
    console.log(mealInCart);
    if (mealInCart === undefined) {
      const elemMealToPush = { ...elemMeal, quantity: 1 };
      copyCart.push(elemMealToPush);
    } else {
      mealInCart.quantity++;
    }
    // Dans tous les cas, je réactualise mon state de tableau
    setCart(copyCart);
  };

  const handleRemoveFromCart = (elemMeal) => {
    // Je faire une copie de cart comme à chaque modification d'un tableau
    const copyCart = [...cart];
    // Je cherche dans mon tableau l'id de quelle itération correspond à l'id de l'elem que je veux retirer
    const mealInCart = copyCart.find((elem) => elem.id === elemMeal.id);
    // Si la clef quantity de l'elem trouvée est égale à 1
    if (mealInCart.quantity === 1) {
      // Je récupere son index dans copyCart
      const index = copyCart.indexOf(mealInCart);
      // A partir de son index je remplace 1 element par rien du tout, donc il disparait
      copyCart.splice(index, 1);
      // Et si la clef quantity de l'objet n'est pas égale à 1 je décrémente juste sa clef de 1
    } else {
      mealInCart.quantity--;
    }
    // Je sauvegarde les modification que j'ai effectué sur mon tableau
    setCart(copyCart);
  };

  // Pour le total
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    // On prend ajoute toutes les clefs quantity des objets de notre tableau et on les multiplie par toutes les clefs price
    total = total + cart[i].quantity * Number(cart[i].price);
  }
  return (
    <div className="cart-side">
      <div className="cart">
        <button>Valider mon panier</button>

        {cart.length === 0 && <p>Remplissez votre panier !!</p>}
        {/* Gestion de l'affichage dans le cart 2  */}

        {cart.map((elem) => {
          return (
            <div key={elem.id}>
              <button
                onClick={() => {
                  handleAddInCart(elem);
                }}
              >
                +
              </button>
              <span>{elem.quantity}</span>
              <button
                onClick={() => {
                  handleRemoveFromCart(elem);
                }}
              >
                -
              </button>

              <span>{elem.title}</span>
              <span>{(elem.price * elem.quantity).toFixed(2)} € </span>
            </div>
          );
        })}
        <p>total = {total}</p>
      </div>
    </div>
  );
};

export default Cart;
