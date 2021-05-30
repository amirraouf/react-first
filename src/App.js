import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch default='/'>
        <Route path="/" exact={true}>
          <AllMeetups />
        </Route>
        <Route path="/fav">
          <Favourites />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
