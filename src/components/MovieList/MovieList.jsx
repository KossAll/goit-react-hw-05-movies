import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import style from './MovieList.module.css';

const MovieList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title }) => (
    <li className={style.item} key={id}>
      <Link
        className={style.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  ));
  return <ul className={style.list}>{elements}</ul>;
};
export default memo(MovieList);

MovieList.defaultProps = {
  items: [],
};

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
