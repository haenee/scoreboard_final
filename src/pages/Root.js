import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {Scoreboard} from "./Scoreboard";
import {FilterableProductTable} from "./product/FilterableProductTable";
import {Menu} from "./Menu";


export const Root = (props) => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/heroes" component={Heroes}></Route>
        <Route path="/scoreboard" component={Scoreboard}></Route>
        <Route path="/product" component={FilterableProductTable}></Route>
      </Switch>
    </BrowserRouter>
  );
}