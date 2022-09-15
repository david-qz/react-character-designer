import './Character.css';

export default function Character({ character }) {
  return (
    <div className='Character'>
      <img src={`${process.env.PUBLIC_URL}/character/${character.head}-head.png`}></img>
      <img src={`${process.env.PUBLIC_URL}/character/${character.torso}-torso.png`}></img>
      <img src={`${process.env.PUBLIC_URL}/character/${character.pants}-pants.png`}></img>
    </div>
  );
}
