import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import { mockData } from "../../data/data";
import { Card } from "../Card/Card";
import "./Kanban.css";

export const Kanban = () => {
    const [data, setData] = useState(mockData);

    const onDragEnd = (result) => {
        // console.log(result);
        if (!result.destination) return;
        const { source, destination } = result;
        // console.log(result);

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(
                (e) => e.id === source.droppableId
            );
            const destinationColIndex = data.findIndex(
                (e) => e.id === destination.droppableId
            );

            const sourceCol = data[sourceColIndex];
            const destinationCol = data[destinationColIndex];

            const sourceTask = [...sourceCol.tasks];
            const destinationTask = [...destinationCol.tasks];

            const [removed] = sourceTask.splice(source.index, 1);

            destinationTask.splice(destination.index, 0, removed);

            data[sourceColIndex].tasks = sourceTask;
            data[destinationColIndex].tasks = destinationTask;

            setData(data);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban">
                {data.map((element) => (
                    <Droppable key={element.id} droppableId={element.id}>
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                className="kanban__section"
                                ref={provided.innerRef}>
                                <div className="kanban__section__title">
                                    {element.title}
                                </div>
                                <div className="kanban__section__content">
                                    {element.tasks.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided
                                                            .draggableProps
                                                            .style,
                                                        opacity:
                                                            snapshot.isDragging
                                                                ? "0.5"
                                                                : "1",
                                                    }}>
                                                    <Card>{item.title}</Card>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};
