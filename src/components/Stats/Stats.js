import './Stats.css';

/*
 * In the absence of truly stable unique ids for the catchphrases, just use an incrementing UID assigner that's shared
 * between all instances of this component. This effectively forces React to never re-use DOM nodes between renderings
 * of the catchphrases list, which is no real shame since it's a tiny amount of DOM to create.
 *
 * In a real production app I suppose some timestamp-based UID could be created for each catchphrase and stored
 * alongside the phrase itself in state.
 */
let lastId = 0;
function getUID() {
  return lastId++;
}

export default function Stats({
  stats: { headChanged, torsoChanged, pantsChanged },
  catchphrases
}) {
  return (
    <div className='Stats'>
      <p>{`You've changed this character's head ${headChanged} times.`}</p>
      <p>{`You've changed this character's torso ${torsoChanged} times.`}</p>
      <p>{`You've changed this character's pants ${pantsChanged} times.`}</p>
      <p>{"You're character's catchphrases are:"}</p>
      <ul>
        {catchphrases.map((phrase) => <li key={getUID()}>{phrase}</li>)}
      </ul>
    </div>
  );
}
