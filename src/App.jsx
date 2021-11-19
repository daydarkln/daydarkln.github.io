import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainView from "./views/main.vew";
import NewGameView from "./views/new-game.vew";
import RoleManagingView from "./views/role-managing.view";
import routes from "./routes";
import GameView from "./views/game.view";
import GameStore from "./stores/game.store";
import AddCategoryView from "./views/add-category.view";
import { CategoriesView } from "./views/categories/categories.view";
import { RulesView } from "./views/rules.view";
import { WinnerView } from "./views/winner.view";

const gameStore = new GameStore();

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={routes.main}>
            <MainView
              menuItems={[
                { id: 1, name: "Новая игра", path: routes.newGame },
                { id: 2, name: "Правила", path: routes.rules },
                {
                  id: 3,
                  name: "Добавить новую категорию",
                  path: routes.addCategory,
                },
                {
                  id: 4,
                  name: "Список категорий",
                  path: routes.categories,
                },
              ]}
            />
          </Route>
          <Route exact path={routes.newGame}>
            <NewGameView gameStore={gameStore} />
          </Route>
          <Route exact path={routes.roleManaging}>
            <RoleManagingView gameStore={gameStore} />
          </Route>
          <Route exact path={routes.game}>
            <GameView gameStore={gameStore} />
          </Route>
          <Route exact path={routes.addCategory}>
            <AddCategoryView />
          </Route>
          <Route exact path={routes.rules}>
            <RulesView />
          </Route>
          <Route exact path={routes.categories}>
            <CategoriesView />
          </Route>
          <Route exact path={routes.winner}>
            <WinnerView gameStore={gameStore} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
