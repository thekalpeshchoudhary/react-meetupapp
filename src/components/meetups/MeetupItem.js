import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupsItem = (props) => {
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
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupsItem;
