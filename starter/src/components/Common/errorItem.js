import PropTypes from "prop-types";

const ErrorItem = ({ source }) => {
  return (
    <div className="center-image">
      <img src={source} alt="Error" />
    </div>
  );
};
ErrorItem.propTypes = {
  source: PropTypes.string.isRequired,
};

export default ErrorItem;
