type State = {
   isDark: boolean,
   fSize: number
}

type Action = {
   type: "toggle" | "increase" | "decrease"
}

export const MyReducer = (state: State, action: Action): State => {
   switch(action.type) {
      case "toggle":
         return { 
            ...state,
            isDark: !state.isDark
          }
      case "increase":
         return { 
            ...state,
            fSize: state.fSize + 1 }
      case "decrease":
         return { 
            ...state,
            fSize: state.fSize - 1 }
      default:
         return state
   }
}