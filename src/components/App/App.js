import './App.css';
import LabeledSelect from '../LabeledSelect/LabeledSelect';
import { useState } from 'react';

function App() {
  const [selectState, setSelectState] = useState('1');

  function selectChanged(newValue) {
    setSelectState(newValue);
  }

  return <>
    <LabeledSelect label={'blah'} options={['1', '2', '3']} value={selectState} onChange={selectChanged} />
  </>;
}

export default App;
