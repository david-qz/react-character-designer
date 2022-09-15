import './Controls.css';
import LabeledSelect from '../LabeledSelect/LabeledSelect';
import TextEntry from '../TextEntry/TextEntry';

export default function Controls({ character, setCharacterHead, setCharacterTorso, setCharacterPants, addCatchphrase }) {
  return (
    <div className='Controls'>
      <LabeledSelect
        label="Head"
        options={['bird', 'dog', 'duck', 'horse']}
        value={character.head}
        onChange={setCharacterHead}
      />
      <LabeledSelect
        label="Torso"
        options={['blue', 'dress', 'pink', 'red']}
        value={character.torso}
        onChange={setCharacterTorso}
      />
      <LabeledSelect
        label="Pants"
        options={['blue', 'dog', 'leg', 'white']}
        value={character.pants}
        onChange={setCharacterPants}
      />
      <TextEntry label="Add a Catchphrase" onSubmit={addCatchphrase}/>
    </div>
  );
}
