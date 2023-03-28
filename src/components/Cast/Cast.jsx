import useFetchMovieDetails from 'shared/servises/FetchMovieDetails';
import { baseImgUrl } from '../../shared/servises/film-app';
import style from './Cast.module.css';

const Cast = () => {
  const movieDetails = useFetchMovieDetails('/credits');

  return (
    <>
      {movieDetails && (
        <ul className={style.list}>
          {movieDetails.cast.map(
            ({ credit_id, name, character, profile_path }) => (
              <li key={credit_id} className={style.item}>
                <div className={style.imgBox}>
                  <img
                    className={style.img}
                    src={
                      profile_path
                        ? baseImgUrl + profile_path
                        : 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                    }
                    alt={name}
                  ></img>
                </div>
                <h3 className={style.title}>{name}</h3>
                <p className={style.text}>{`Character: ${character}`}</p>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
