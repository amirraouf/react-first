import { Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetups />
      </Route>
      <Route path="/fav">
        <Favourites />
      </Route>
      <Route path="/new-meetup">
        <NewMeetup />
      </Route>
    </div>
  );
}

export default App;
