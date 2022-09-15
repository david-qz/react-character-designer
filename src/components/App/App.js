import './App.css';
import { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';

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

  return <>
    <Character character={character} />
  </>;
}

export default App;
