import { useReducer } from "react"
import { MyReducer } from "./reducers/reducer"

const App = () => {
  const [state, dispatch] = useReducer(MyReducer, { isDark: false, fSize: 16 })

  return (
    <div style={{
      backgroundColor: state.isDark ? "#2b2a28" : "#eeeeee",
      width: "100vw",
      height: "100%"
    }}>
      <h3 style={{ 
        color: state.isDark 
        ? "white" 
        : "black",
        fontSize: state.fSize
        }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis magni repellendus unde at, ipsum voluptatem eaque officia enim fugit veritatis!</h3>
      <button  onClick={() => dispatch({ type: "toggle" })}>Toggle Dark Mode</button>
    <button onClick={() => dispatch({ type: "increase" })}>Increase Font Size</button>
    <button  onClick={() => dispatch({ type: "decrease" })}>Decrease Font Size</button>
    </div>
  )
}

export default App