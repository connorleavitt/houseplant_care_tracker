export default function Input({ type, name, placeholder, onChange, value }) {
  return (
    <input
      className="pp-card--form-input"
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
}
