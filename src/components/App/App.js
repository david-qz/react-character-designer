import './App.css';
import LabeledSelect from '../LabeledSelect/LabeledSelect';
import TextEntry from '../TextEntry/TextEntry';
import { useState } from 'react';

function App() {
  const [selectState, setSelectState] = useState('1');

  function selectChanged(newValue) {
    setSelectState(newValue);
  }

  function onSubmit(text) {
    // eslint-disable-next-line no-console
    console.log(text);
  }

  return <>
    <LabeledSelect label="blah" options={['1', '2', '3']} value={selectState} onChange={selectChanged} />
    <TextEntry label="blah" onSubmit={onSubmit}/>
  </>;
}

export default App;
