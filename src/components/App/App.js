import './App.css';
import { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Stats from '../Stats/Stats';

import options from '../../options';

function useCharacterState() {
  const [character, setCharacter] = useState({
    head: 'dog',
    torso: 'blue',
    pants: 'white'
  });
  const [stats, setStats] = useState({
    headChanged: 0,
    torsoChanged: 0,
    pantsChanged: 0
  });
  const [catchphrases, setCatchphrases] = useState([]);

  const setCharacterHead = (head) => {
    setCharacter((prev) => ({ ...prev, head }));
    setStats((prev) => ({ ...prev, headChanged: prev.headChanged + 1 }));
  };
  const setCharacterTorso = (torso) => {
    setCharacter((prev) => ({ ...prev, torso }));
    setStats((prev) => ({ ...prev, torsoChanged: prev.torsoChanged + 1 }));
  };
  const setCharacterPants = (pants) => {
    setCharacter((prev) => ({ ...prev, pants }));
    setStats((prev) => ({ ...prev, pantsChanged: prev.pantsChanged + 1 }));
  };
  const addCatchphrase = (catchphrase) => {
    setCatchphrases((prev) => [...prev, catchphrase]);
  };

  return {
    character: {
      ...character,
      catchphrases
    },
    stats,
    setCharacterHead,
    setCharacterTorso,
    setCharacterPants,
    addCatchphrase
  };
}

function App() {
  const {
    character,
    stats,
    setCharacterHead,
    setCharacterTorso,
    setCharacterPants,
    addCatchphrase
  } = useCharacterState();

  return (
    <div className='App'>
      <Controls
        character={character}
        setCharacterHead={setCharacterHead}
        setCharacterTorso={setCharacterTorso}
        setCharacterPants={setCharacterPants}
        addCatchphrase={addCatchphrase}
        options={options}
      />
      <Character character={character} />
      <Stats stats={stats} catchphrases={character.catchphrases} />
    </div>
  );
}

export default App;
