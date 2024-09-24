import BookingOptions from "./components/Booking_Components/BookingOptions";
import BookingUserInfo from "./components/Booking_Components/BookingUserInfo";


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