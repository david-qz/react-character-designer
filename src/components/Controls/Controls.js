import './Controls.css';
import LabeledSelect from '../LabeledSelect/LabeledSelect';
import TextEntry from '../TextEntry/TextEntry';

export default function Controls({
  character,
  setCharacterHead,
  setCharacterTorso,
  setCharacterPants,
  addCatchphrase,
  options
}) {
  return (
    <div className='Controls'>
      <LabeledSelect
        label="Head"
        options={options.head}
        value={character.head}
        onChange={setCharacterHead}
      />
      <LabeledSelect
        label="Torso"
        options={options.torso}
        value={character.torso}
        onChange={setCharacterTorso}
      />
      <LabeledSelect
        label="Pants"
        options={options.pants}
        value={character.pants}
        onChange={setCharacterPants}
      />
      <TextEntry label="Add a Catchphrase" onSubmit={addCatchphrase}/>
    </div>
  );
}
