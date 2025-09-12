import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById, getColumnsByList } from '../../redux/store';
// losowe id nie na sztywno:
import { useParams, Navigate } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {
  // const columns = useSelector((state) => state.columns);
  // wszystkie kolumny
  // const columns = useSelector(getAllColumns);

  const { listId } = useParams();
  // na sztywno
  // const listData = useSelector((state) => getListById(state, 1));
  const listData = useSelector((state) => getListById(state, listId));
  // na sztywno
  // const columnsData = useSelector((state) => getColumnsByList(state, 1));
  const columnsData = useSelector((state) => getColumnsByList(state, listId));

  // jeśli nie ma takiego id w liscie danych to strona główna
  if (!listData) return <Navigate to='/' />;

  // console.log(listData);
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title} <span></span>
        </h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columnsData.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
