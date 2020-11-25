import React from "react";
import Axios from "axios";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Cart, Home } from "./pages";

import "./scss/app.scss";

function App() {
  const [pizzaState, setPizzaState] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = "http://localhost:3000/db.json";

    Axios.get(apiUrl).then(({ data }) => setPizzaState(data.pizzas));
  }, [setPizzaState]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact>
          <Home state={pizzaState} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </div>
  );
}

export default App;
