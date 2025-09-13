import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = ({listId}) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    dispatch(addColumn({ title, icon, listId }));
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
