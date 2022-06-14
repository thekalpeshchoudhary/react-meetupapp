import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleRef = useRef();
  const urlRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const catchSubmit = (e) => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredUrl = urlRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDesc = descriptionRef.current.value;
    const meetupDataOb = {
      title: enteredTitle,
      url: enteredUrl,
      address: enteredAddress,
      description: enteredDesc,
    };
    props.onAddMeetup(meetupDataOb);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={catchSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required ref={urlRef} id="url" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required ref={addressRef} id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea required ref={descriptionRef} id="description"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
