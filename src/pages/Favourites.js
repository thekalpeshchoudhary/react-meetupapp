import { useContext } from "react";
import FavouriteContext from "../store/favourite-context";
import MeetupsList from "../components/meetups/MeetupsList";

const Favourites = () => {
  const favCtx = useContext(FavouriteContext);
  let content;
  if (favCtx.totalFavourites === 0) {
    content = <p>No favorites added.</p>;
  } else {
    content = <MeetupsList meetups={favCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favourites;
