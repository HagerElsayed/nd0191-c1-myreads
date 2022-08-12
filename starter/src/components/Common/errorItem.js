import PropTypes from "prop-types";

const ErrorItem = ({ source }) => {
  return (
    <div className="center-image">
      <img src={source} alt="Error Page Not found 404" />
    </div>
  );
};
ErrorItem.propTypes = {
  source: PropTypes.string.isRequired,
};

export default ErrorItem;
