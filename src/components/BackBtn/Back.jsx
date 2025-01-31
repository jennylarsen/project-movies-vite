import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export const Back = () => (
  <>
    {/* Create a link that navigates back to the home page ("/") */}
    <Link to="/" className="back-link">
      {/* Render an arrow icon using react-icons */}
      <IoIosArrowDropleftCircle
        className="back-icon"
        ariaLabel="Go Back to Popular Movies"
      />
      {/* Display "Movies" next to the arrow for the link text */}
      Movies
    </Link>
  </>
);
