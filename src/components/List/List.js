import styles from './List.module.scss';
import Column from '../Column/Column';
// import { useState } from 'react';
// import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';

const List = () => {
  const columns = useSelector((state) => state.columns);

  // declarate array

  // const columns = [
  //   { id: 1, title: 'Books', icon: 'book' },
  //   { id: 2, title: 'Movies', icon: 'film' },
  //   { id: 3, title: 'Games', icon: 'gamepad' },
  // ];

  // create state for items

  // const [columns, setColumns] = useState([
  //   {
  //     id: 1,
  //     title: 'Books',
  //     icon: 'book',
  //     cards: [
  //       { id: 1, title: 'This is Going to Hurt' },
  //       { id: 2, title: 'Interpreter of Maladies' },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: 'Movies',
  //     icon: 'film',
  //     cards: [
  //       { id: 1, title: 'Harry Potter' },
  //       { id: 2, title: 'Star Wars' },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: 'Games',
  //     icon: 'gamepad',
  //     cards: [
  //       { id: 1, title: 'The Witcher' },
  //       { id: 2, title: 'Skyrim' },
  //     ],
  //   },
  // ]);

  //  create state for event submit

  // const addColumn = (newColumn) => {
  //   setColumns([
  //     ...columns,
  //     {
  //       id: shortid(),
  //       title: newColumn.title,
  //       icon: newColumn.icon,
  //       cards: [],
  //     },
  //   ]);
  // };

  // const addCard = (newCard, columnId) => {
  //   const columnUpdate = columns.map((column) => {
  //     if (column.id === columnId)
  //       return {
  //         ...column,
  //         cards: [...column.cards, { id: shortid(), title: newCard.title }],
  //       };
  //     else return column;
  //   });
  //   setColumns(columnUpdate);
  // };
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do <span>soon</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interestin things I want to check out
      </p>

      <section className={styles.columns}>
        {/* elementy na sztywno */}
        {/* <Column title='Books' icon='book' />
        <Column title='Movies' icon='film' />
        <Column title='Games' icon='gamepad' /> */}

        {/* mapowanie - przejście po każdym elemencie i stworzenie nowego  */}
        {columns.map((column) => (
          <Column
            key={column.id}
            {...column}
            // id={column.id}
            // title={column.title}
            // icon={column.icon}
            // cards={column.cards}
            // action={addCard}
          />
        ))}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;
