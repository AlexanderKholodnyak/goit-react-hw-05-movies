import PropTypes from 'prop-types';
import s from './ErrorView.module.css';

export default function ErrorView({ message }) {
  return (
    <div className={s.box} role="alert">
      <p className={s.title}>Sorry, something went wrong.</p>
      <p className={s.subtitle}>Error : {message}</p>
    </div>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
