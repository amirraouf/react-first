import MeetupItem from "./Meetupitem";

import classes from './Meetuplist.module.css';

function MeetupList(props) {
    return (
        <ul className={classes.list}>
        {props.meetups.map((meetup) => {
          return <MeetupItem key={meetup.id} meetup={meetup} />;
        })}
      </ul>
    );
}

export default MeetupList;