import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup(props) {
    function addMeetup(meetup) {
        fetch('https://react-test-bf066-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    return (
        <div>
            <NewMeetupForm newMeetup={addMeetup}></NewMeetupForm>
        </div>
    )
}

export default NewMeetup;