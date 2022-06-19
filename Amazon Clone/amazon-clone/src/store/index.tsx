import Cookies from "js-cookie";
import { createContext, Dispatch, useReducer } from "react";

interface IContextProps {
  state: typeof initialState;
  dispatch: Dispatch<any>;
}

export const Store = createContext({} as IContextProps);

const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems")!)
      : [],
    shippingAddress: Cookies.get("shippingAddress")
      ? JSON.parse(Cookies.get("shippingAddress")!)
      : { location: {} },
    paymentMethod: Cookies.get("paymentMethod")
      ? Cookies.get("paymentMethod")
      : "",
  },
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo")!)
    : null,
};

function reducer(state: any, action: any) {
  if (action.type === "DARK_MODE_ON") {
    return { ...state, darkMode: true };
  }
  if (action.type === "DARK_MODE_OFF") {
    return { ...state, darkMode: false };
  }
  if (action.type === "ADD_TO_CART") {
    const newItem = action.payload;
    const existItem = state.cart.cartItems.find(
      (item: any) => item._id === newItem._id
    );
    const cartItems = existItem
      ? state.cart.cartItems.map((item: any) =>
          item.name === existItem.name ? newItem : item
        )
      : [...state.cart.cartItems, newItem];
    Cookies.set("cartItems", JSON.stringify(cartItems));
    return { ...state, cart: { ...state.cart, cartItems } };
  }
  if (action.type === "DELETE_FROM_CART") {
    const cartItems = state.cart.cartItems.filter(
      (item: any) => item._id !== action.payload._id
    );
    Cookies.set("cartItems", JSON.stringify(cartItems));
    return { ...state, cart: { ...state.cart, cartItems } };
  }
  if (action.type === "SAVE_SHIPPING_ADDRESS") {
    return {
      ...state,
      cart: {
        ...state.cart,
        shippingAddress: {
          ...state.cart.shippingAddress,
          ...action.payload,
        },
      },
    };
  }
  if (action.type === "SAVE_PAYMENT_METHOD") {
    return {
      ...state,
      cart: { ...state.cart, paymentMethod: action.payload },
    };
  }
  if (action.type === "USER_LOGIN") {
    return { ...state, userInfo: action.payload };
  }
  if (action.type === "USER_LOGOUT") {
    return { ...state, userInfo: null, cart: { cartItems: [] } };
  } else {
    return state;
  }
}

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
