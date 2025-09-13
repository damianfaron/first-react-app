import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/cardsRedux';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) {
    return <p> No cards...</p>;
  }

  return (
    <div>
      <PageTitle> Favorite </PageTitle>
      <ul className={styles.cards}>
        {favoriteCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
