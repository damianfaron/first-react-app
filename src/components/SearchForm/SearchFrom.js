import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchFormString } from '../../redux/store';

const SearchForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const searchString = (event) => {
    event.preventDefault();
    // dispatch({ type: 'UPDATE_SEARCHSTRING', payload: input });
    dispatch(searchFormString(input));
    // props.action({ title: title }, props.columnId);

    setInput('');
  };

  return (
    <form className={styles.searchForm} onSubmit={searchString}>
      <TextInput
        placeholder='Search...'
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <Button>
        {' '}
        <span className='fa fa-search' />{' '}
      </Button>
    </form>
  );
};

export default SearchForm;
