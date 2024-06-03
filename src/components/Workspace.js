// src/components/Workspace.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import TextBlock from './components/TextBlock';
import ImageHolder from './components/ImageHolder';
import ButtonComponent from './components/ButtonComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Card from './components/Card';
import VideoEmbed from './components/VideoEmbed';
import FormComponent from './components/FormComponent';
import GridLayout from './components/GridLayout';
import SocialMediaIcons from './components/SocialMediaIcons';
import PropertyEditor from './PropertyEditor';

const componentMap = {
  text: TextBlock,
  image: ImageHolder,
  button: ButtonComponent,
  header: Header,
  footer: Footer,
  carousel: Carousel,
  card: Card,
  video: VideoEmbed,
  form: FormComponent,
  grid: GridLayout,
  social: SocialMediaIcons,
};

const Workspace = () => {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item) => addComponent(item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addComponent = (type) => {
    const id = Date.now();
    setComponents((prev) => [...prev, { type, id, props: {} }]);
  };

  const selectComponent = (id) => {
    setSelectedComponent(id);
  };

  const updateComponentProps = (id, newProps) => {
    setComponents((prev) =>
      prev.map((component) =>
        component.id === id ? { ...component, props: newProps } : component
      )
    );
  };

  return (
    <div className="workspace-wrapper">
      <div ref={drop} className="workspace">
        {components.map((component) => {
          const Component = componentMap[component.type];
          return (
            <div
              key={component.id}
              onClick={() => selectComponent(component.id)}
              className="workspace-component"
            >
              <Component {...component.props} />
            </div>
          );
        })}
      </div>
      {selectedComponent && (
        <PropertyEditor
          component={components.find((c) => c.id === selectedComponent)}
          updateComponentProps={updateComponentProps}
        />
      )}
    </div>
  );
};

export default Workspace;
