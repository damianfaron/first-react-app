import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';


const CardForm = (props) => {
  const [title, setTitleForm] = useState('');

  const addOption = (event) => {
    event.preventDefault();

    props.action({ title: title }, props.columnId);

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
