import { useContext } from "react";
import FavContext from "../../store/fav-context";
import Card from "../../ui/Card";
import classes from "./Meetupitem.module.css";

function MeetupItem(props) {
  const favCtx = useContext(FavContext);
  const isFav = favCtx.isFav(props.meetup.id);

  function toggleFavHandler() {
    if (isFav) {
      favCtx.removeFav(props.meetup.id);
    } else {
      favCtx.addFav({
        id: props.meetup.id,
        address: props.meetup.address,
        description: props.meetup.description,
        title: props.meetup.title,
        image: props.meetup.image
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavHandler}>{isFav ? 'Remove from Favourites': 'Add to Favourites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
