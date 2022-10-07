export default function LabeledSelect({ label, options, value, onChange }) {
  return (
    <label className='LabeledSelect'>
      {label}
      <select onChange={(e) => onChange(e.target.value)} value={value}>
        {
          Object.entries(options).map(([key, value]) => {
            return <option key={value} value={value}>{key}</option>;
          })
        }
      </select>
    </label>
  );
}
