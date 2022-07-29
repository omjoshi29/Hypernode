import { COURSEDATA, COURSEFILTER, COURSESORTER, COMPAREDATA } from "./action";

const inits = {
  productsData: [],
  allproducts: [],
  desData: {},
  compareobj: {},
};

export const reducer = (state = inits, action) => {
  console.log("reducer", action.payload);
  switch (action.type) {
    case COMPAREDATA: {
      return {
        ...state,
        compareobj: action.payload,
      };
    }
    case COURSEDATA: {
      return {
        ...state,
        productsData: action.payload,
        allproducts: action.payload,
      };
    }
    case COURSEFILTER: {
      return {
        ...state,
        productsData: action.payload,
      };
    }
    case COURSESORTER: {
      return {
        ...state,
        productsData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
