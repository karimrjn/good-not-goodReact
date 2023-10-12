import PropTypes from "prop-types";
import Wilder from "./wilder";

function Trombi({ wilderArray }) {
  return (wilderArray.map((wilder) => {
    return <Wilder wilder={wilder} />
  })
  );
}

Trombi.propTypes = {
  wilderArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    //   master: PropTypes.bool.isRequired,
    })
  ),
};

export default Trombi;
