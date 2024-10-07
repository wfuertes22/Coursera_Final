import { useState } from "react";
import BookingImages from "./BookingImages";
import {Link} from "react-router-dom";



const ReservationForm = () =>{

    const [formInputState, setFormInputState ]= useState({
        reservationDate: "",
        numOfDiners: "",
        occasion: "",
        time: "",
        seating: "", //has to be seating since the name for both the indoor and outdoor radio buttons have the same name
    })

    const handleLayoutChange = (e) => {
        const { name, value } = e.target;
        setFormInputState((prevState) => ({
          ...prevState,
          [name]: value !== 'default' ? value : '' // Reset to empty if default option is selected
        }));
    };

    function areFieldsFilled() {
        return formInputState.reservationDate && formInputState.numOfDiners && formInputState.occasion && formInputState.time && formInputState.seating;
    }

        return(
            <>
                <section className="reservationContainer container">
                    <h2 id="reservationTitle">Reservations</h2>
                    <form>
                        <section className="reservationOptions">
                            <section className="gridBox">
                                <label htmlFor="indoor">
                                    Indoor
                                    <input
                                        type="radio"
                                        id="indoor"
                                        name="seating"
                                        value="indoor"
                                        onChange={handleLayoutChange}
                                    />
                                </label>
                            </section>
                            <section className="gridBox">
                                <label htmlFor="outdoor">
                                    Outdoor
                                    <input
                                        type="radio"
                                        id="outdoor"
                                        name="seating"
                                        value="outdoor"
                                        onChange={handleLayoutChange}
                                    />
                                </label>
                            </section>
                            <section className="gridBox">
                                <label htmlFor="reservationDate" id="reservationTextLabel">Date of Reservation</label>
                                <input
                                    type="date"
                                    name="reservationDate"
                                    /* reservationDate and other input are initially empty. The ternary operator checks to see if it is empty or or not.
                                        If the value is not empty meaning the user has chosen an option, then the className will be .changedInputBox.
                                        If the value is empty(default. Check handleLayoutChange) then the className will be defaultInputBox*/
                                    className={formInputState.reservationDate ? 'changedInputBox' : 'defaultInputBox'}
                                    id="reservationDate"
                                    value={formInputState.reservationDate}
                                    onChange={handleLayoutChange}
                                />
                            </section>
                            <section className="gridBox">
                                <label htmlFor="numOfDiners" id="numOfDinersLabel">Number of Diners</label>
                                <select
                                    className={formInputState.numOfDiners ? 'changedInputBox' : 'defaultInputBox'}
                                    id="numOfDiners"
                                    name="numOfDiners"
                                    value={formInputState.numOfDiners}
                                    onChange={handleLayoutChange}>
                                        <option value="default">No. of Diners</option>
                                        <option value="1">1 Diner</option>
                                        <option value="2">2 Diners</option>
                                        <option value="3">3 Diners</option>
                                        <option value="4">4 Diners</option>
                                        <option value="5">5 Diners</option>
                                        <option value="6">6 Diners</option>
                                        <option value="7">7 Diners</option>
                                        <option value="8">8 Diners</option>
                                        <option value="9">9 Diners</option>
                                        <option value="10">10 Diners</option>
                                </select>
                            </section>
                            <section className="gridBox">
                                <label htmlFor="occasion" id="occasionLabel">Occasion</label>
                                <select
                                    className={formInputState.occasion ? 'changedInputBox' : 'defaultInputBox'}
                                    id="occasion"
                                    name="occasion"
                                    value={formInputState.occasion}
                                    onChange={handleLayoutChange}>
                                        <option value="default">Occasion</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Aniversary">Aniversary</option>
                                </select>
                            </section>
                            <section className="gridBox">
                                <label htmlFor="time" id="timeLabel">Time</label>
                                <select
                                    className={formInputState.time ? 'changedInputBox' : 'defaultInputBox'}
                                    name="time"
                                    id="time"
                                    value={formInputState.time}
                                    onChange={handleLayoutChange}>
                                        <option value="default">Select Time</option>
                                        <option value="5:00 PM">5:00 PM</option>
                                        <option value="6:00 PM">6:00 PM</option>
                                        <option value="7:00 PM">7:00 PM</option>
                                        <option value="8:00 PM">8:00 PM</option>
                                        <option value="9:00 PM">9:00 PM</option>
                                        <option value="10:00 PM">10:00 PM</option>
                                </select>
                            </section>
                        </section>
                    </form>
                </section>
                <BookingImages />
                {/*pass form data as props to display in the next subroute*/}
                <Link 
                    to="user-info" 
                    state={{fromReservationForm: formInputState}} 
                    id="goToUserInfoButton" 
                    className="container"
                >
                    <button type="submit" id="nextButton" disabled={!areFieldsFilled()}>
                        Next
                    </button>
                </Link>
            </>
        );
}

export default ReservationForm;