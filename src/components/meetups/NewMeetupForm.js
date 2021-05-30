import { useRef } from "react";
import Card from "../../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {
    const titleRef = useRef();
    const addressRef = useRef();
    const imageRef = useRef();
    const descRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const meetupData = {
        title: titleRef.current.value,
        address: addressRef.current.value,
        image: imageRef.current.value,
        description: descRef.current.value
    }
    props.newMeetup(meetupData)
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description" ref={descRef}></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
