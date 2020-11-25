import React from "react";
import { Categories, Pizza, Sort } from "../components";

function Home({ state }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {state.map((obj) => (
          <Pizza key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
