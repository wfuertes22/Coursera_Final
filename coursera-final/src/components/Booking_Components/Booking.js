import ReservationForm from "./ReservationForm";
import { Outlet, useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();
    return (
      <>
        {/*BookingOptions already holds BookingImages.js therefore it also holds the button to change the url*/}
        {/*<ReservationForm />
        <Outlet />*/}
        {location.pathname === "/reservations" && <ReservationForm />}
        <Outlet />
      </>
    );
  }

export default Booking;