import useFetchMovieDetails from 'shared/servises/FetchMovieDetails';
import style from './Reviews.module.css';

const Reviews = () => {
  const movieDetails = useFetchMovieDetails('/reviews');

  return (
    <>
      {movieDetails &&
        (movieDetails.results.length > 0 ? (
          <ul>
            {movieDetails.results.map(({ id, author, content }) => (
              <li key={id} className={style.item}>
                <h3 className={style.title}>{`Author: ${author}`}</h3>
                <p className={style.text}>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={style.text}>We don't have any reviews for this movie</p>
        ))}
    </>
  );
};

export default Reviews;
