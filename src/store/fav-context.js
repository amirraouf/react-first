import { createContext, useState } from "react";

const FavContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFav: (favouriteMeetup) => {},
  removeFav: (favouriteMeetupId) => {},
  isFav: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFav, setUserFav] = useState([]);

  function addFavHandler(favouriteMeetup) {
    setUserFav((prevUserFav) => {
      return prevUserFav.concat(favouriteMeetup);
    });
  }

  function removeFavHandler(favouriteMeetupId) {
    setUserFav((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== favouriteMeetupId);
    });
  }

  function isFavouriteHandler(meetupId) {
      return userFav.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFav,
    totalFavourites: userFav.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    isFav: isFavouriteHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
