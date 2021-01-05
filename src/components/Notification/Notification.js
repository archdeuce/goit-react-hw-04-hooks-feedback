import './Notification.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (
    <div className="Notification__container">
      <h3 className="Notification__title">{message}</h3>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
