import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/Meetuplist";

function AllMeetups(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  useEffect(()=>{
    fetch(
      "https://react-test-bf066-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        for (const key in data) {
          const meetup = {
            id: key, ...data[key]
          }
          meetups.push(meetup);
        }
        setIsLoading(false);
        setMeetups(meetups);
      });
  }, [isLoading])
  
    if(isLoading){
      return (<div>Loading!!</div>);

    }else{

      return (
        <section>
          <h1>AllMeetups</h1>
          <MeetupList meetups={meetups} />
        </section>
      );

    }
}

export default AllMeetups;
