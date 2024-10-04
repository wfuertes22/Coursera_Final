import { useLocation } from "react-router-dom";

const BookingUserInfo = () => {
    const location = useLocation();
    const {fromReservationForm} = location.state;

    return(
        <section className="userInfoSection container">
            <form>
                <section>
                    <label htmlFor="fName">First Name</label>
                    <input name="fName" id="fName"></input>
                </section>
                <section>
                    <label htmlFor="lName">Last Name</label>
                    <input name="lName" id="lName"></input>
                </section>
                <section>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"></input>
                </section>
                <section>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id="phone"></input>
                </section>
                <section className="formData">
                    <p>{fromReservationForm.reservationDate}</p>
                    <p>{fromReservationForm.numOfDiners}</p>
                    <p>{fromReservationForm.occasion}</p>
                    <p>{fromReservationForm.time}</p>
                </section>
                <section>
                    <label htmlFor="specialRequest">Special Requests</label>
                    <input name="specialRequest" id="specialRequest"></input>
                </section>
            </form>
            {/*<p>{fromReservationForm.time}</p>*/}
        </section>
    );
}

export default BookingUserInfo;