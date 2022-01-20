import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import MaterialTable from './components/materialTable';

export interface defaultListObjectType {
  id: string;
  title: string;
}

const todos: Array<defaultListObjectType> = [
  { id: '1', title: '공부' },
  { id: '2', title: '헬스' },
  { id: '3', title: '독서' },
  { id: '4', title: '산책' },
  { id: '5', title: '요리' },
];

function App() {
  return (
    <div>
      <MaterialTable items={todos} />
    </div>
  );
}
export default App;
