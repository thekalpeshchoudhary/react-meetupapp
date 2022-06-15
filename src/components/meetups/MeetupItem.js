import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouriteContext from "../../store/favourite-context";

const MeetupsItem = (props) => {
  const favCtx = useContext(FavouriteContext);
  const itemIsFav = favCtx.itemForFavHandler(props.meetUpData.id);
  const toggleFavStatus = () => {
    if (itemIsFav) {
      favCtx.removeFav(props.meetUpData.id);
    } else {
      favCtx.addFav({
        id: props.meetUpData.id,
        title: props.meetUpData.title,
        address: props.meetUpData.address,
        description: props.meetUpData.description,
        url: props.meetUpData.url,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetUpData.url} alt={props.meetUpData.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetUpData.title}</h3>
          <address>{props.meetUpData.address}</address>
          <p>{props.meetUpData.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatus}>{itemIsFav ? 'Remove From Favorite' : 'Add to Favorite'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupsItem;
