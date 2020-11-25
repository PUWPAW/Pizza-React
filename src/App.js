import Axios from "axios";
import React from "react";
import { Header, Categories, Sort, Pizza } from "./components";

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
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaState.map((obj) => (
              <Pizza key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
