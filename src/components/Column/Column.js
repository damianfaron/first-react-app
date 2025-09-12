import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = (props) => {
  // find items in page take searchString
  const cards = useSelector((state) => getFilteredCards(state, props.id));
  // const cards = useSelector((state) => state.cards);
  // console.log('Column render');
  // const cards = useSelector((state) =>
  //   state.cards.filter(
  //     (card) =>
  //       card.columnId === props.id &&
  //       card.title.toLowerCase().includes(searchString.toLowerCase())
  //   )
  // );

  return (
    <article className={styles.column}>
      <span className={styles.icon + ' fa fa-' + props.icon} />
      <h2 className={styles.title}> {props.title} </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          ></Card>
        ))}
      </ul>
      <CardForm columnId={props.id}></CardForm>
    </article>
  );
};

export default Column;
