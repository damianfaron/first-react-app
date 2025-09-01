import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    props.action({ title: title, icon: icon });

    setTitle('');
    setIcon('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      {/* <input imput z tego komponentu - poniżej input który przekazuje wartości do przygotowanego TextInput
        type='text'
        placeholder='Title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      /> */}
      Title:
      <TextInput
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      Icon:
      <TextInput
        type='text'
        value={icon}
        onChange={(event) => setIcon(event.target.value)}
      />
      {/* <button>Add column</button> */}
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
