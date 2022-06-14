import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const AddNewMeetups = () => {
  const navigate = useNavigate();
  const onAddMeetup = (meetupDataOb) => {
    fetch(
      `https://reactapp-c8b84-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json`,
      {
        method: "POST",
        body: JSON.stringify(meetupDataOb),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => navigate("/", { replace: true }));
  };

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
  );
};

export default AddNewMeetups;
