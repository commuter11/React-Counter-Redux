const initialState = {
  count: 0,
  count1: 0,
  numberInputted: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        count1: state.count1 + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        count1: state.count1 + 1
      };
      case "CHANGENUMBER":
        
        return{
          ...state,
          numberInputted: action.number
        };
        case 'INPUT':
          return{
            ...state,
            count: parseInt(state.numberInputted),
            count1: state.count1 = 0
          };
    default:
      return state;
  }
}


export default counterReducer;