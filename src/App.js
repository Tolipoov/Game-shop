import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux";
import HomePage from "./Pages/home-pages/HomePage";
import Header from "./Components/Header/Header";
import GamePage from "./Pages/game-pages/GamePage";
import OrderPage from "./Pages/order-page/OrderPage";

function App() {
  return (
    <Provider store={store}>
        <Router>
            <div className="App">
              <Header/>
              <Switch>
                <Route exact path="/">
                  <HomePage/>
                </Route>
                <Route exact path="/app/:title">
                  <GamePage/>
                </Route>
                <Route exact path="/order">
                  <OrderPage/>
                </Route>
              </Switch>
            </div>
        </Router>
    </Provider>  
    );
}

export default App;
