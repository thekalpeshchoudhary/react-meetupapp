import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFav: (favMeetup) => {},
  removeFav: (meetupId) => {},
  itemForFavHandler: (meetupId) => {},
});

export const FavouriteContextProvider = (props) => {
  const [userFav, setUserFav] = useState([]);

  function addFav(favMeetup) {
    setUserFav((prev) => {
      return prev.concat(favMeetup);
    });
  }
  function removeFav(meetupId) {
    setUserFav((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemForFavHandler(meetupId) {
    return userFav.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFav,
    totalFavourites: userFav.length,
    addFav: addFav,
    removeFav: removeFav,
    itemForFavHandler: itemForFavHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
