export const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      const isProduct = state.find((product) => product.id === action.payload.id);

      if (isProduct) {
        const updatedCart = state.map((product) => {
          if (product.id === isProduct.id) {
            return { ...isProduct, quantity: isProduct.quantity + 1 };
          } else {
            return product;
          }
        });
        return updatedCart;
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "Increment": {
      const updatedCart = state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...action.payload, quantity: action.payload.quantity + 1 };
        } else {
          return product;
        }
      });

      return updatedCart;
    }

    case "Decrement": {
      const updatedCart = state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...action.payload, quantity: action.payload.quantity - 1 };
        } else {
          return product;
        }
      });

      return updatedCart;
    }

    case "updateQuantity": {
      const updatedCart = state.map((product) => {
        if (product.id === action.payload.product.id) {
          return { ...action.payload.product, quantity: action.payload.quantity };
        } else {
          return product;
        }
      });

      return updatedCart;
    }

    case "Remove": {
      const updatedCart = state.filter((product) => product.id !== action.payload);
      return updatedCart;
    }

    default:
      return state;
  }
};
