import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/store';
import { useDispatch } from 'react-redux';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      Title:
      <TextInput
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      Description:
      <TextInput
        type='text'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
