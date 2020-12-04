import React from "react";
import Axios from "axios";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { Header } from "./components";
import { Cart, Home } from "./pages";

import "./scss/app.scss";
import { setPizzas as setPizzasAction } from "./redux/actions/actionPizzas";

// function App() {
//   const [pizzaState, setPizzaState] = React.useState([]);

//   React.useEffect(() => {
//     const apiUrl = "http://localhost:3000/db.json";

//     Axios.get(apiUrl).then(({ data }) => setPizzaState(data.pizzas));
//   }, [setPizzaState]);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/" exact>
//           <Home state={pizzaState} />
//         </Route>
//         <Route path="/cart">
//           <Cart />
//         </Route>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    const apiUrl = "http://localhost:3000/db.json";
    Axios.get(apiUrl).then(({ data }) => this.props.setPizzas(data.pizzas));
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact>
            <Home state={this.props.pizzas} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
