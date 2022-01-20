import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

type defaultListObjectType = {
  id: number;
  title: string;
};

const defaultList: Array<defaultListObjectType> = [
  { id: 1, title: 'item1' },
  { id: 2, title: 'item2' },
  { id: 3, title: 'item3' },
  { id: 4, title: 'item4' },
  { id: 5, title: 'item5' },
];

function App() {
  const [list, setList] = useState(defaultList);
  const [activeItem, setActiveItem] = useState(list[0]);

  const onDropEnd = (list: Array<defaultListObjectType>) => {
    setList([...list]);
  };

  const onDelete = (list: Array<defaultListObjectType>) => {
    setList([...list]);
  };

  return (
    <div>
      {defaultList.map((el) => (
        <li>{el.id}</li>
      ))}
    </div>
  );
}
export default App;
