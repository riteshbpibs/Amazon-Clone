import { createContext, useContext, useReducer } from "react";

// Data Layer
export const ItemContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ initialState, reducer, children }) => (
    <ItemContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </ItemContext.Provider >
)

// Pull information from the data layer
export const useItemValue = () => useContext(ItemContext)