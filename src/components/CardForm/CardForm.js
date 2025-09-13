import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = ({ columnId }) => {
  const [title, setTitleForm] = useState('');
  const dispatch = useDispatch();

  const addOption = (event) => {
    event.preventDefault();
    // dispatch({ type: 'ADD_CARD', payload: { title, columnId } });
    dispatch(addCard({ title, columnId }));
    // props.action({ title: title }, props.columnId);

    setTitleForm('');
  };

  return (
    <form onSubmit={addOption} className={styles.form}>
      <TextInput
        value={title}
        onChange={(event) => setTitleForm(event.target.value)}
        className={styles.input}
      ></TextInput>
      <Button>Add</Button>
    </form>
  );
};

export default CardForm;
