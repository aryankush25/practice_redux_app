import React from "react";
import { useDrop } from "react-dnd";

const style = {
    height: "40rem",
    width: "40rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal",
    float: "left"
};
const Dustbin = ({ image }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: "box",
        drop: () => ({ name: "Dustbin" }),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    const isActive = canDrop && isOver;
    let backgroundColor = "#222";
    if (isActive) {
        backgroundColor = "darkgreen";
    } else if (canDrop) {
        backgroundColor = "darkkhaki";
    }
    return (
        <div ref={drop} style={{ ...style, backgroundColor }}>
            {isActive ? "Release to drop" : (!image ? "Drag a box here"
                : <img src={image.src} alt={image.name} height="100%" width="100%" />
            )}
        </div>
    );
};
export default Dustbin;
