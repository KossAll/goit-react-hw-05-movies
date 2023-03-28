import PropTypes from 'prop-types';
import { baseImgUrl } from 'shared/servises/film-app';
import style from './MovieData.module.css';

const MovieData = ({ url, tag, title, score, overview, genres, date }) => {
  return (
    <>
      <div className={style.line}></div>
      <div className={style.imgBox}>
        <img src={baseImgUrl + url} alt={tag} width="250px" />
        <div className={style.descriptionBox}>
          <h2 className={style.title}>
            {title} ({date.slice(0, 4)})
          </h2>
          <p className={style.text}>User Score: {Math.round(score * 10)}%</p>
          <h3 className={style.secondTitle}>Overview</h3>
          <p className={style.text}>{overview}</p>
          <h3 className={style.secondTitle}>Genres</h3>
          <ul className={style.list}>
            {genres.map(genre => (
              <li className={style.text} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieData;

MovieData.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
};
