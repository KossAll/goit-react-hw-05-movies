import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Loader = lazy(() => import('shared/components/Loader/Loader'));
const Layout = lazy(() => import('components/Layout/Layout'));
const HomePage = lazy(() => import('pages/Home/Home'));
const MoviesPage = lazy(() => import('pages/Movies/Movies'));
const MoviesDetailsPage = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
