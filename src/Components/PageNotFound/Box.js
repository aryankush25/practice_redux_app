import React from "react";
import { useDrag } from "react-dnd";

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
    id,
    setCurrentId
}) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id, type: "box" },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                setCurrentId(item.id);
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0.4 : 1;
    return (
        <div ref={drag} style={{ ...style, opacity }}>
            <img src={src} alt={name} height="100px" width="100px" />
            <div style={{ textAlign: "center" }}>
                {name}
            </div>
        </div>
    );
};
export default Box;
