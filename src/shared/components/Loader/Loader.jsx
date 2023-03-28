import { RotatingLines } from 'react-loader-spinner';
import style from './loader.module.css';

const Loader = () => {
  return (
    <div className={style.box}>
      <RotatingLines
        strokeColor="#3498db"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
