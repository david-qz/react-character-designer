export default function LabeledSelect({ label, options, value, onChange }) {
  return (
    <label className='LabeledSelect'>
      {label}
      <select onChange={(e) => onChange(e.target.value)} value={value}>
        {options.map((option) => {
          return <option key={option} value={option}>
            {option}
          </option>;
        })}
      </select>
    </label>
  );
}
