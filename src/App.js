/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Axios from "axios";

import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Cart, Home } from "./pages";
import { Header } from "./components";

import { setPizzas } from "./redux/actions/actionPizzas";
import "./scss/app.scss";

function App() {
  const dispatch = useDispatch();

  window.test = () => {
    const apiUrl = "http://localhost:3000/db.json";
    Axios.get(apiUrl).then(({ data }) => dispatch(setPizzas(data.pizzas)));
  };

  React.useEffect(() => {
    const apiUrl = "http://localhost:3001/pizzas";
    Axios.get(apiUrl).then(({ data }) => dispatch(setPizzas(data)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     const apiUrl = "http://localhost:3000/db.json";
//     Axios.get(apiUrl).then(({ data }) => this.props.setPizzas(data.pizzas));
//   }

//   render() {
// window.test = () => {
//   const apiUrl = "http://localhost:3000/db.json";
//   Axios.get(apiUrl).then(({ data }) => this.props.setPizzas(data.pizzas));
// };
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route path="/" exact>
//             <Home state={this.props.pizzas} />
//           </Route>
//           <Route path="/cart">
//             <Cart />
//           </Route>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     pizzas: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
