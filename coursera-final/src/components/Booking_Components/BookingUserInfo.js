import { useLocation } from "react-router-dom";
import images from "../../images/images";

const BookingUserInfo = () => {
    const location = useLocation();
    const {fromReservationForm} = location.state;

    return(
        <section className="userInfoSection container">
            <form id="userInfoForm">
                <section className="labelAndInput">
                    <label htmlFor="fName">* First Name</label>
                    <input name="fName" id="fName" placeholder="First Name"></input>
                </section>
                <section className="labelAndInput">
                    <label htmlFor="lName"> * Last Name</label>
                    <input name="lName" id="lName" placeholder="Last Name"></input>
                </section>
                <section className="labelAndInput">
                    <label htmlFor="email">* Email</label>
                    <input type="email" name="email" id="email" placeholder="you@company.com"></input>
                </section>
                <section className="labelAndInput">
                    <label htmlFor="phone">* Phone Number</label>
                    <input type="tel" inputMode="numeric" name="phone" id="phone" placeholder="(123)456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                </section>
                <section id="formData">
                    <img src={images.calendar} alt=""><p>{fromReservationForm.reservationDate}</p></img>
                    <p>{fromReservationForm.numOfDiners} Diners</p>
                    <p>{fromReservationForm.occasion}</p>
                    <p>{fromReservationForm.time}</p>
                </section>
                <section className="labelAndInput">
                    <label htmlFor="specialRequest">Special Requests</label>
                    <textarea name="specialRequest" id="specialRequest" placeholder="Comment" size="140"></textarea>
                </section>
            </form>
        </section>
    );
}

export default BookingUserInfo;