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
      <h2>About your character:</h2>
      <p>Their catchphrases are:</p>
      <ul>
        {
          catchphrases.length > 0
            ? catchphrases.map((phrase) => <li key={getUID()}><span className='catchphrase'>{phrase}</span></li>)
            : <li style={{ color: '#777' }}>No catchphrases yet!</li>
        }
      </ul>
      <h2>Stats:</h2>
      <ul>
        <li>{`You've changed your character's head ${headChanged} times.`}</li>
        <li>{`You've changed your character's torso ${torsoChanged} times.`}</li>
        <li>{`You've changed your character's pants ${pantsChanged} times.`}</li>
      </ul>
    </div>
  );
}
