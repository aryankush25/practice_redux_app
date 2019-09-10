import React from "react";
import { useDragLayer } from "react-dnd";

const layerStyles = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 1000,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
};
const style = {
    border: "1px dashed gray",
    backgroundColor: "red",
    padding: "2px",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    float: "left"
};

function getItemStyles(initialOffset, currentOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: "none"
        };
    }
    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform
    };
}

const CustomDragLayer = () => {
    const {
        isDragging,
        item,
        initialOffset,
        currentOffset
    } = useDragLayer(
        monitor => ({
            item: monitor.getItem(),
            itemType: monitor.getItemType(),
            initialOffset: monitor.getInitialSourceClientOffset(),
            currentOffset: monitor.getSourceClientOffset(),
            isDragging: monitor.isDragging()
        })
    );
    if (!isDragging) {
        return null;
    }
    return (
        <div style={layerStyles}>
            <div style={getItemStyles(initialOffset, currentOffset)}>
                <div style={style}>
                    <img src={item.src} alt={item.name} height="200px" width="200px" />
                    <div style={{ textAlign: "center" }}>
                        {item.name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomDragLayer;
