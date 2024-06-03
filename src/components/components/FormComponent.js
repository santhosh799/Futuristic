// src/components/components/FormComponent.js
import React from 'react';

const FormComponent = ({ fields }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="component form-component">
      <form onSubmit={handleSubmit}>
        {(fields || [{ type: 'input', placeholder: 'Enter text' }]).map((field, index) => {
          if (field.type === 'input') {
            return <input key={index} type="text" placeholder={field.placeholder} />;
          } else if (field.type === 'textarea') {
            return <textarea key={index} placeholder={field.placeholder}></textarea>;
          } else if (field.type === 'checkbox') {
            return (
              <label key={index}>
                <input type="checkbox" />
                {field.label}
              </label>
            );
          }
          return null;
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
