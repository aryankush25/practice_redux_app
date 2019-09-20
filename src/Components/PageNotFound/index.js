import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { photos } from "../../utils/constants";
import Box from "./Box.js";
import CustomDragLayer from "./CustomDragLayer.js";
import "./style.css";

const Container = () => {
    const [photosArray, setPhotosArray] = useState(photos);
    const changedPhotoArrayOrder = (sourceId, targetId) => {
        let sourceIdx = 0;
        let targetIdx = 0;
        let sourceIdxObj = {};
        const newPhotoArray = photosArray;

        newPhotoArray.forEach((photo, idx) => {
            if (photo.id === sourceId) {
                sourceIdx = idx;
                sourceIdxObj = photo;
            }
        });
        newPhotoArray.splice(sourceIdx, 1);

        newPhotoArray.forEach((photo, idx) => {
            if (photo.id === targetId) {
                targetIdx = idx;
            }
        });
        newPhotoArray.splice(targetIdx + 1, 0, sourceIdxObj);
        setPhotosArray([...newPhotoArray]);
    };
    return (
        <div>
            <CustomDragLayer />

            <div
                className="App"
                style={{
                    marginTop: "200px",
                    marginLeft: "200px"
                }}
            >
                {
                    photosArray.map((photo) => {
                        return <Box
                            key={photo.id}
                            src={photo.src}
                            name={photo.name}
                            id={photo.id}
                            changedPhotoArrayOrder={changedPhotoArrayOrder}
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
