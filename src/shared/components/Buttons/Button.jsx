import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import style from './button.module.css';

const Buttons = ({ page, previousPage, nextPage }) => {
  return (
    <div className={style.btnBox}>
      {page > 1 && (
        <button className={style.button} type="button" onClick={previousPage}>
          <IconContext.Provider
            value={{
              style: { width: '20px', height: '20px', fill: '#3498db' },
            }}
          >
            <AiOutlineArrowLeft />
          </IconContext.Provider>
        </button>
      )}

      {<p className={style.text}>{page}</p>}
      <button className={style.button} type="button" onClick={nextPage}>
        <IconContext.Provider
          value={{
            style: { width: '20px', height: '20px', fill: '#3498db' },
          }}
        >
          <AiOutlineArrowRight />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default Buttons;

Buttons.propTypes = {
  page: PropTypes.string.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};
