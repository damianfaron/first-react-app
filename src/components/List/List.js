import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
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
        {/* <article>
          <h2>Books</h2>
        </article> */}
        <Column title='Books' icon='book'/>
        {/* <article>
          <h2>Movies</h2>
        </article> */}
        <Column title='Movies' icon='film' />
        {/* <article>
          <h2>Games</h2>
        </article> */}
        <Column title='Games' icon='gamepad' />
      </section>
    </div>
  );
};

export default List;
