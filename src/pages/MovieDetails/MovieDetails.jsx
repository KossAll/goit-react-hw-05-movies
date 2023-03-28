import { useCallback } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineBackward } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import style from './MovieDetails.module.css';
import Section from 'shared/components/Section/Section';
import MovieData from 'components/MovieData/MovieData';
import Loader from 'shared/components/Loader/Loader.jsx';
import useFetchMovieDetails from 'shared/servises/FetchMovieDetails';

const MoviesDetailsPage = () => {
  const location = useLocation();
  const from = location.state?.from || '/';
  const navigate = useNavigate();
  const movieDetails = useFetchMovieDetails();

  const goBack = useCallback(() => navigate(from), [from, navigate]);

  return (
    <Section>
      {!movieDetails && <Loader />}
      <button type="button" className={style.btn} onClick={goBack}>
        <IconContext.Provider
          value={{
            style: { width: '24px', height: '30px', fill: '#3498db' },
          }}
        >
          <AiOutlineBackward />
        </IconContext.Provider>
        GO BACK
      </button>
      {movieDetails && (
        <MovieData
          url={movieDetails.poster_path}
          tag={movieDetails.title}
          title={movieDetails.title}
          score={movieDetails.vote_average}
          overview={movieDetails.overview}
          genres={movieDetails.genres}
          date={movieDetails.release_date}
        />
      )}
      <div className={style.line}></div>
      <h3 className={style.secondTitle}>Additional information</h3>
      <ul className={style.listLink}>
        <li className={style.item}>
          <Link className={style.itemLink} to="cast" state={{ from }}>
            Cast
          </Link>
        </li>
        <li className={style.item}>
          <Link className={style.itemLink} to="reviews" state={{ from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <div className={style.line}></div>
      <Outlet />
    </Section>
  );
};

export default MoviesDetailsPage;
