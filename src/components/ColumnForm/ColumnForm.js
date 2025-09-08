import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });

    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
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
