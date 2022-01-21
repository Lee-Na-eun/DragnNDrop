import React, { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
  DraggableProvided,
  DroppableProvided,
} from 'react-beautiful-dnd';
import { defaultListObjectType } from '../App';

// props를 전달해주고 싶은데 TS2322: Type '{items defaultListObjectType[]; }' is not assignable to type 'IntrinsicAttributes'. 이런 에러가 계속 나온다.
//화살표 함수형에서 쓰이는 React.FC<p>는 unctional Component의 약자로, 타입을 지정하면 된다.
// 함수 선언식으로 컴포넌트를 만들었을 경우, props는 interface로 !

const MaterialTable: React.FC<{ items: defaultListObjectType[] }> = ({
  items,
}) => {
  const [localItems, setLocalItems] =
    useState<Array<defaultListObjectType>>(items);

  const handleDragEnd = (result: DropResult, provided?: ResponderProvided) => {
    // if (!result.destination) {
    //   return;
    // }

    // if (result.destination.index === result.source.index) {
    //   return;
    // }

    // setLocalItems((prev: any) => {
    //   const temp = [...prev];
    //   const d = temp[result.destination!.index];
    //   temp[result.destination!.index] = temp[result.source.index];
    //   temp[result.source.index] = d;

    //   return temp;
    // });

    if (!result.destination) {
      return;
    } else {
      const currentTags = [...localItems];
      const draggingItemIndex = result.source.index;
      const afterDragItemIndex: number | undefined = result.destination?.index;

      if (result.destination.index === 0) {
        console.log('joj');
        const removeTags = currentTags.splice(draggingItemIndex, 1);
        currentTags.unshift(removeTags[0]);
      } else {
        const removeTag = currentTags.splice(draggingItemIndex, 1);

        console.log('draggingIndex', draggingItemIndex);
        console.log('removeTag', removeTag);
        if (afterDragItemIndex) {
          currentTags.splice(afterDragItemIndex, 0, removeTag[0]);
        }
      }
      setLocalItems(currentTags);
    }

    console.log(result);
  };

  return (
    // <DragDropContext onDragEnd={handleDragEnd}>
    //   <Droppable droppableId='droppable' direction='vertical'>
    //     {(droppableProvided: DroppableProvided) => (
    //       <div
    //         id='tableBody'
    //         ref={droppableProvided.innerRef}
    //         {...droppableProvided.droppableProps}
    //       >
    //         {localItems.map((item: defaultListObjectType, index: number) => (
    //           <Draggable key={item.id} draggableId={item.id} index={index}>
    //             {(
    //               draggableProvided: DraggableProvided,
    //               snapshot: DraggableStateSnapshot
    //             ) => {
    //               return (
    //                 <ul
    //                   id='tableRow'
    //                   ref={draggableProvided.innerRef}
    //                   {...draggableProvided.draggableProps}
    //                   style={{
    //                     ...draggableProvided.draggableProps.style,
    //                     background: snapshot.isDragging
    //                       ? 'rgba(245,245,245, 0.75)'
    //                       : 'none',
    //                   }}
    //                 >
    //                   <li>
    //                     <div {...draggableProvided.dragHandleProps}>
    //                       <div>icon</div>
    //                     </div>
    //                   </li>
    //                   <li>{item.title}</li>
    //                 </ul>
    //               );
    //             }}
    //           </Draggable>
    //         ))}
    //         {droppableProvided.placeholder}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>

    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='dropTags'>
        {(droppableProvided: DroppableProvided) => (
          <ul
            className='tags'
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            {localItems.map((el: defaultListObjectType, index: number) => (
              <Draggable key={el.id} draggableId={el.id} index={index}>
                {(draggableProvided: DraggableProvided) => (
                  <li
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                    {...draggableProvided.draggableProps}
                  >
                    {el.title}
                  </li>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MaterialTable;
