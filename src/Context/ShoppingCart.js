import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext([]);

export const ShoppingCartProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addMenu = (menu, count) => {
    setShoppingCart((shoppingCartItems) => {
      const index = shoppingCartItems.findIndex(
        (cartItem) => cartItem.menu.id === menu.id
      );
      if (index > 0) {
        shoppingCartItems[index].count += count;
      } else {
        shoppingCartItems.push({
          count,
          menu,
        });
      }
      return [...shoppingCartItems];
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addMenu,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

const shoppingCartData = [
  {
    count: 0,
  },
];

export const useShoppingCart = () => {
  const { shoppingCart, addMenu } = useContext(ShoppingCartContext);
  const totalItems =
    shoppingCart?.length > 0
      ? shoppingCart.reduce((pre, cartItem) => pre + cartItem.count, 0)
      : 0;

  return {
    totalItems,
    shoppingCart,
    addMenu,
  };
};
