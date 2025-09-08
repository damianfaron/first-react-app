import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = (props) => {
  // find items in page take searchString
  const searchString = useSelector((state) => state.searchString.toLowerCase());
  // const cards = useSelector((state) => state.cards);
  const cards = useSelector((state) =>
    state.cards.filter(
      (card) =>
        card.columnId === props.id &&
        card.title.toLowerCase().includes(searchString.toLowerCase())
    )
  );

  return (
    <article className={styles.column}>
      <span className={styles.icon + ' fa fa-' + props.icon} />
      <h2 className={styles.title}> {props.title} </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title}></Card>
        ))}
      </ul>
      <CardForm columnId={props.id}></CardForm>
    </article>
  );
};

export default Column;
