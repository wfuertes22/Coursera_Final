import { useLocation } from "react-router-dom";

const BookingUserInfo = () => {
    const location = useLocation();
    const {fromReservationForm} = location.state;

    return(
        <section className="container">
            <p>{fromReservationForm.time}</p>
        </section>
    );
}

export default BookingUserInfo;