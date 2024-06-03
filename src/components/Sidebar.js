// src/components/Sidebar.js
import React from 'react';
import { useDrag } from 'react-dnd';

const components = [
  { id: 1, type: 'text', label: 'Text Block' },
  { id: 2, type: 'image', label: 'Image Holder' },
  { id: 3, type: 'button', label: 'Button' },
  { id: 4, type: 'header', label: 'Header' },
  { id: 5, type: 'footer', label: 'Footer' },
  { id: 6, type: 'carousel', label: 'Carousel' },
  { id: 7, type: 'card', label: 'Card' },
  { id: 8, type: 'video', label: 'Video Embed' },
  { id: 9, type: 'form', label: 'Form' },
  { id: 10, type: 'grid', label: 'Grid Layout' },
  { id: 11, type: 'social', label: 'Social Media Icons' },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {components.map((component) => (
        <DraggableComponent key={component.id} component={component} />
      ))}
    </div>
  );
};

const DraggableComponent = ({ component }) => {
  const [, drag] = useDrag(() => ({
    type: 'component',
    item: { type: component.type },
  }));

  return (
    <div ref={drag} className="draggable-component">
      {component.label}
    </div>
  );
};

export default Sidebar;
