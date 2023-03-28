import PropTypes from 'prop-types';
import style from './section.module.css';

function Section({ children }) {
  return <section className={style.section}>{children}</section>;
}

export default Section;

Section.propTypes = {
  children: PropTypes.any,
};
