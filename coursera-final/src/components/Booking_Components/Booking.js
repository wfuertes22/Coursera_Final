import BookingOptions from "./BookingOptions";
import BookingUserInfo from "./BookingUserInfo";


const userInfo = () => {
  return <BookingUserInfo />;
}

const options = () =>{
  return <BookingOptions />;
}

function Booking() {
    return (
      <>
        {/*BookingOptions already holds BookingImages.js therefore it also holds the button to change the url*/}
        <BookingOptions />
      </>
    );
  }

export default Booking;