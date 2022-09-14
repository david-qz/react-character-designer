export default function TextEntry({ label, onSubmit }) {
  function onFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    form.reset();
    onSubmit(formData.get('text'));
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        {label}
        <input name='text'></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
