import { Route, Link, Switch } from "react-router-dom";
import TaskList from "./TaskList";
import UserName from "./UserName";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link className="navLink" to="/">
          Task List
        </Link>
        <Link className="navLink" to="/set-username">
          User Name
        </Link>
      </nav>
      <Switch>
        <Route path="/set-username">
          <UserName />
        </Route>
        <Route path="/">
          <TaskList />
        </Route>
      </Switch>
    </div>
  );
}
