/**ANALYSIS
 * 1. create-react-app my-first-react-web-app
 * 2. npm install --save bootstrap
 * 3. import '../node_modules/bootstrap/dist/css/bootstrap.min.css' to index.js file.
 * 4. create components/Header/Card/Footer as functional (simple) components.
 * 5. use bootstrap ready-to-use stylings according to mockup design. 
 * 6. import them to App.js file.
 * 7. npm start
 */

//imports
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

//Call components directly here
function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5">
          <Header></Header>
        </div>

        <div className="row">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

        <div className="row">
          <Footer></Footer>
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
