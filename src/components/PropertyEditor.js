import React from 'react';

const PropertyEditor = ({ component, updateComponentProps }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'images') {
      newValue = value.split(',').map(url => url.trim());
    } else if (name === 'fields') {
      newValue = value.split(',').map(type => ({ type: type.trim() }));
    } else if (name === 'profiles') {
      newValue = value.split(',').map(url => ({ href: url.trim() }));
    } else if (name === 'children') {
      newValue = value.split('\n');
    }

    updateComponentProps(component.id, { ...component.props, [name]: newValue });
  };

  const renderField = (prop, label, type = 'text') => (
    <div key={prop} className="property-editor-field">
      <label>{label}</label>
      <input name={prop} type={type} value={component.props[prop] || ''} onChange={handleChange} />
    </div>
  );

  return (
    <div className="property-editor">
      <h3>Edit Properties</h3>
      {component.type === 'text' && renderField('text', 'Text')}
      {component.type === 'image' && renderField('src', 'Image URL')}
      {component.type === 'button' && renderField('label', 'Button Label')}
      {component.type === 'header' && renderField('text', 'Header Text')}
      {component.type === 'footer' && renderField('text', 'Footer Text')}
      {component.type === 'video' && renderField('src', 'Video URL')}
      {component.type === 'card' && (
        <>
          {renderField('title', 'Card Title')}
          {renderField('image', 'Card Image URL')}
          {renderField('content', 'Card Content')}
        </>
      )}
      {component.type === 'carousel' && (
        <div className="property-editor-field">
          <label>Images (comma-separated URLs)</label>
          <input name="images" value={component.props.images?.join(', ') || ''} onChange={handleChange} />
        </div>
      )}
      {component.type === 'form' && (
        <div className="property-editor-field">
          <label>Form Fields (comma-separated types)</label>
          <input name="fields" value={component.props.fields?.map(f => f.type).join(', ') || ''} onChange={handleChange} />
        </div>
      )}
      {component.type === 'social' && (
        <div className="property-editor-field">
          <label>Profiles (comma-separated URLs)</label>
          <input name="profiles" value={component.props.profiles?.map(p => p.href).join(', ') || ''} onChange={handleChange} />
        </div>
      )}
      {component.type === 'grid' && (
        <div className="property-editor-field">
          <label>Grid Items</label>
          <textarea name="children" value={component.props.children?.join('\n') || ''} onChange={handleChange}></textarea>
        </div>
      )}
    </div>
  );
};

export default PropertyEditor;
