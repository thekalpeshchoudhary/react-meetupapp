import classes from './MeetupsList.module.css'
import MeetupsItem from './MeetupItem';

const MeetupsList = (props) => {
  return (
    <ul className={classes.list}>
        {props.meetups.map(meetup =><MeetupsItem key={meetup.id} meetUpData={meetup} />)}
    </ul>
  );
};

export default MeetupsList;
