import React, { useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import "./style.css";

const style = {
    borderRadius: "2px",
    border: "solid 1px #007BA7",
    backgroundColor: "white",
    cursor: "move",
    float: "left",
    width: "54px",
    height: "66px"
};
const Box = ({
    src,
    name,
    id,
    changedPhotoArrayOrder
}) => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: {
            id,
            name,
            src,
            type: "box"
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const [, drop] = useDrop({
        accept: "box",
        drop({ id: draggedId }) {
            if (draggedId !== id) { changedPhotoArrayOrder(draggedId, id); }
        }
    });
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);
    const opacity = isDragging ? 0.4 : 1;
    return (
        <React.Fragment>
            <div
                ref={node => drop(drag(node))}
                style={{ ...style, opacity }}
            >
                <div style={{
                    margin: "2px 2px 0px 2px"
                }}
                >
                    <img src={src} alt={name} height="40px" width="100%" />
                </div>
            </div>
            <div className="drag-line-wrapper">

                <div className="drag-line" />
            </div>
        </React.Fragment>
    );
};
export default Box;
