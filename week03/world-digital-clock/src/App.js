/**ANALYSIS
 * 1. create-react-app digital-clock-react-app
 * 2. create components/Clock as functional (simple) component.
 * 3. import Clock.js to App.js file.
 * 4. npm start
 */

import "./App.css";
import Clock from "./components/Clock";

function App() {
  return (
    <>
      <div className="App">
        <Clock />
      </div>
    </>
  );
}

export default App;
