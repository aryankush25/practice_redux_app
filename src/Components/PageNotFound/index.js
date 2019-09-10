import React, { useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { photos } from "../../utils/constants";
import Box from "./Box.js";
import CustomDragLayer from "./CustomDragLayer.js";
import "./style.css";

const Container = () => {
    const [photosArray, setPhotosArray] = useState(photos);
    const [, drop] = useDrop({ accept: "box" });
    return (
        <div>
            <CustomDragLayer />

            <div className="App" ref={drop}>
                {
                    photosArray.map((photo) => {
                        return <Box
                            key={photo.id}
                            src={photo.src}
                            name={photo.name}
                            id={photo.id}
                        />;
                    })
                }
            </div>
        </div>
    );
};

const PageNotFound = () => (
    <DndProvider backend={HTML5Backend}>
        <Container />
    </DndProvider>
);

export default PageNotFound;
