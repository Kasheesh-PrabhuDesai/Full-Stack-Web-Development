import Cookies from "js-cookie";
import { createContext, Dispatch, useReducer } from "react";

const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
};

interface IContextProps {
  state: typeof initialState;
  dispatch: Dispatch<any>;
}

export const Store = createContext({} as IContextProps);

function reducer(state: any, action: any) {
  if (action.type === "DARK_MODE_ON") {
    return { ...state, darkMode: true };
  }
  if (action.type === "DARK_MODE_OFF") {
    return { ...state, darkMode: false };
  } else {
    return { ...state };
  }
}

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
