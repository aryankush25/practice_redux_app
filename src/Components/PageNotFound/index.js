import React, { PureComponent } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { photos } from "../../utils/constants";
import Dustbin from "./Dustbin.js";
import Box from "./Box.js";
import "./style.css";

class Container extends PureComponent {
    constructor() {
        super();
        this.state = {
            currentId: null
        };
    }

    setCurrentId = (id) => {
        this.setState({
            currentId: id
        });
    }

    getImageById = (id) => {
        let image = null;
        photos.forEach((photo) => {
            if (photo.id === id) {
                image = photo;
            }
        });
        return image;
    }

    render() {
        const { currentId } = this.state;
        return (
            <DndProvider backend={HTML5Backend}>
                <div className="App">
                    <div>
                        <Dustbin
                            image={this.getImageById(currentId)}
                        />
                    </div>
                    <div>
                        {
                            photos.map((photo) => {
                                return <Box
                                    key={photo.id}
                                    src={photo.src}
                                    name={photo.name}
                                    id={photo.id}
                                    setCurrentId={this.setCurrentId}
                                />;
                            })
                        }
                    </div>
                </div>
            </DndProvider>
        );
    }
}

export default Container;
