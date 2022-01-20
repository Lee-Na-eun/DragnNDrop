import React, { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
  DraggableProvided,
  DroppableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import { defaultListObjectType } from '../App';

// props를 전달해주고 싶은데 TS2322: Type '{ items: defaultListObjectType[]; }' is not assignable to type 'IntrinsicAttributes'. 이런 에러가 계속 나온다.
//화살표 함수형에서 쓰이는 React.FC<p>는 unctional Component의 약자로, 타입을 지정하면 된다.
// 함수 선언식으로 컴포넌트를 만들었을 경우, props는 interface로 !
const MaterialTable: React.FC<{ items: defaultListObjectType[] }> = ({
  items,
}) => {
  return <div>hihi</div>;
};

export default MaterialTable;
