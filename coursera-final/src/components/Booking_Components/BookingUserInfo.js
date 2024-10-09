import { useState } from "react";
import { useLocation } from "react-router-dom";
import BookingImages from "./BookingImages";
import images from "../../images/images";

const BookingUserInfo = () => {
    const location = useLocation();
    const {fromReservationForm} = location.state;

    const [userInputState, setUserInputState] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: ""
    })

    const showConfirmation = () =>{
        alert("Your Reservation has been confirmed. Please check your email")
    }

    function userInfoFilled(){
        return userInputState.fName && userInputState.lName && userInputState.email && userInputState.phone;
    }

    const handleInfoChange = (e) =>{
        setUserInputState(e.target.value)
    }

    return(
        <>
            <section className="userInfoSection container">
                <form id="userInfoForm">
                    <section className="labelAndInput">
                        <label htmlFor="fName">* First Name</label>
                        <input
                            name="fName"
                            id="fName"
                            placeholder="First Name"
                            autoComplete="First name"
                            value = {userInputState.fName}
                            onChange={handleInfoChange}
                        >
                        </input>
                    </section>
                    <section className="labelAndInput">
                        <label htmlFor="lName"> * Last Name</label>
                        <input
                            name="lName"
                            id="lName"
                            placeholder="Last Name"
                            autoComplete="Last name"
                            value = {userInputState.lName}
                            onChange={handleInfoChange}
                        >
                        </input>
                    </section>
                    <section className="labelAndInput">
                        <label htmlFor="email">* Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@company.com"
                            autoComplete="email"
                            value = {userInputState.email}
                            onChange={handleInfoChange}
                        >
                        </input>
                    </section>
                    <section className="labelAndInput">
                        <label htmlFor="phone">* Phone Number</label>
                        <input
                            type="tel"
                            inputMode="numeric"
                            name="phone"
                            id="phone"
                            placeholder="(123)456-7890"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            autoComplete="phone"
                            value={userInputState.phone}
                            onChange={handleInfoChange}
                        >
                        </input>
                    </section>
                    <section id="formData">
                        <p>
                            <img src={images.calendar} alt=""/>
                            {fromReservationForm.reservationDate}
                        </p>
                        <p>
                            <img src={images.profileIMG} alt=""/>
                            {fromReservationForm.numOfDiners} Diners
                        </p>
                        <p>
                            <img src={images.clock} alt=""/>
                            {fromReservationForm.time}
                        </p>
                        <p>
                            <img src={images.wineGlass} alt=""/>
                            {fromReservationForm.occasion}
                        </p>
                        {fromReservationForm.seating === "indoor" ? <p>Indoor Seating</p> : <p>Outdoor Seating</p>}
                    </section>
                    <section className="labelAndInput">
                        <label htmlFor="specialRequest">Special Requests</label>
                        <textarea name="specialRequest" id="specialRequest" placeholder="Comment" size="140"></textarea>
                    </section>
                    <label htmlFor="privacyPolicy">
                        <input
                            type="radio"
                            id="privacyPolicy"
                            name="privacyPolicy"
                            value="agree"
                            required
                        />
                        You agree to out friendly privacy policy
                    </label>
                </form>
            </section>
            <BookingImages />
            <section className="reserveButton container">
                <button type="submit" onClick={showConfirmation} disabled={!userInfoFilled()}>Reserve</button>
            </section>
        </>
    );
}

export default BookingUserInfo;