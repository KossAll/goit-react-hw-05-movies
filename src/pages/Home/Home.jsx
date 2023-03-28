import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from 'shared/components/Section/Section';
import MovieList from 'components/MovieList/MovieList';
import { getMoviesPopular } from '../../shared/servises/film-app.js';
import Loader from 'shared/components/Loader/Loader.jsx';
import Buttons from 'shared/components/Buttons/Button';
import style from './Home.module.css';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMoviesPopular(page);
        setItems(data.results);
      } catch ({ response }) {
        toast.error(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  const nextPage = useCallback(() => {
    setSearchParams({ page: Number(page) + 1 });
  }, [page, setSearchParams]);

  const previousPage = useCallback(() => {
    if (page > 1) {
      setSearchParams({ page: Number(page) - 1 });
    }
  }, [page, setSearchParams]);

  return (
    <Section>
      <h1 className={style.title}>Trending today</h1>
      {loading && <Loader />}
      {items.length && !loading && <MovieList items={items} />}
      {items.length && !loading && (
        <Buttons page={page} nextPage={nextPage} previousPage={previousPage} />
      )}
    </Section>
  );
};

export default HomePage;
