import PropTypes from 'prop-types';
import { useState, memo } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoSearch } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import style from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') {
      toast.info('Enter a search term.');
      return;
    }
    onSubmit({ search });
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        className={style.input}
        value={search}
        onChange={handleChange}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      ></input>
      <button type="submit" className={style.btn}>
        <IconContext.Provider
          value={{
            style: { width: '20px', height: '20px', fill: '#3498db' },
          }}
        >
          <IoSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default memo(SearchBar);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
