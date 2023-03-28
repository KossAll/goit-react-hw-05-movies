import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'shared/servises/film-app';
import { toast } from 'react-toastify';

const useFetchMovieDetails = path => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId, path);
        setMovieDetails(data);
      } catch ({ response }) {
        toast.error(response.data.message);
      }
    };
    fetchDetails();
  }, [movieId, path]);
  return movieDetails;
};

export default useFetchMovieDetails;

useFetchMovieDetails.defaultProps = {
  path: '',
};
