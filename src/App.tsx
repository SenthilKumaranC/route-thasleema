import React, { createContext, useReducer } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

export interface ISpecification {
  batteryLevel: string;
  cameraPixel: string;
  processorType: string;
}

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  specification: ISpecification;
}
export interface IAppState {
  products: IProduct[];
}

const initialState: IAppState = {
  products: [
    { id: 0, name: "IPhone13", brand: "Apple", description: "2021 Model", specification:{batteryLevel:"500mAh", cameraPixel:"12MP",processorType:"Intel"}},
    { id: 1, name: "Samsung21", brand: "Samsung", description: "2023 Model", specification:{batteryLevel:"400mAh", cameraPixel:"12MP",processorType:""}},
    { id: 2, name: "OppoA47", brand: "Oppo", description: "2015 Model", specification:{batteryLevel:"200mAh", cameraPixel:"12MP",processorType:""}},
  ],
};

const reducer = (state:IAppState,action:any) => {
  return state;
}

export const AppContext = createContext({
  state: initialState,
  dispatch: (data: any) => {

  }
})

function App() {

  const[state, dispatch] = useReducer(reducer, initialState);

  return (

    <AppContext.Provider value={{state, dispatch}}>
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
    </AppContext.Provider>
  );
}

export default App;
