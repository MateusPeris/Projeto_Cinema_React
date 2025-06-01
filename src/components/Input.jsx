function Input({ label, name, value, onChange, type = 'text', placeholder = '', className = 'form-control' }) {
  return (
    <div className='mb-3'>
      {label && <label htmlFor={name} className='form-label'>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
