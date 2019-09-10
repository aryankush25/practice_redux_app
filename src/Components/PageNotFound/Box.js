import React, { useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

const style = {
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "2px",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    cursor: "move",
    float: "left"
};
const Box = ({
    src,
    name,
    id
}) => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: {
            id,
            name,
            src,
            type: "box"
        },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                console.log("item", item);
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);
    const opacity = isDragging ? 0.4 : 1;
    return (
        <div
            ref={drag}
            style={{ ...style, opacity }}
        >
            <img src={src} alt={name} height="100px" width="100px" />
            <div style={{ textAlign: "center" }}>
                {name}
            </div>
        </div>
    );
};
export default Box;
