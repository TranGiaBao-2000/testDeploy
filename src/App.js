// import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/home";
import SignIn from "./Page/login";
import MovieDetail from "./Component/movie-detail";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Component/header";
import Booking from "./Page/Booking";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/sign-in" exact={true}>
            <SignIn />
          </Route>
          <Route path="/movie-detail/:movieCode" exact={true}>
            <MovieDetail />
          </Route>
          <Route path="/booking/:maLichChieu">
            <Booking />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
