import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handelToggleFavorite = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.Card}>
      {title}
      <button
        onClick={handelToggleFavorite}
        className={clsx(styles.favoriteButton, isFavorite && styles.isFavorite)}
      >
        <i className='fa fa-star-o' />
      </button>
    </li>
  );
};

export default Card;
