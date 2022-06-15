import { useEffect, useState } from "react";
import MeetupsList from "../components/meetups/MeetupsList";

const AllMeetups = () => {
  const [meetupState, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://reactapp-c8b84-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {meetupState ? (
        <p>Loading...</p>
      ) : (
        <MeetupsList meetups={loadedMeetups} />
      )}
    </section>
  );
};

export default AllMeetups;
