import React from "react";
import "./Robot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowRight, faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function Robot({ position, moveWithDelay, move }) {

    const renderGrid = () => {
        const grid = []; //added to put the rows of cells in the grid
        for (let i = 5; i >= 1; i--) {
            const row = [];
            for (let j = 1; j <= 5; j++) {
                const isRobotHere = i === position.y && j === position.x; // used to check the robot is in this cell location
                row.push(
                    <div
                        key={`${i}-${j}`}
                        className={`cell ${isRobotHere ? "robot" : ""}`}
                        data-testid={`cell-${j}-${i}`}
                        onClick={() => {
                            moveWithDelay(j, i);//added this to pass the correct direction for the click event
                        }}
                    >
                        {isRobotHere && "X"}
                    </div>
                );
            }
            grid.push(<div key={i} className="row">{row}</div>);//each row created with set of cells added to grid
        }
        return grid;
    };

    return (
        <div>
            <h1>Robot Movement</h1>
            <div className="robot-grid-container">
                <p>Current Position: ({position.x}, {position.y})</p>
                <div>{renderGrid()}</div>
                <div className="controls">
                    <div className="button-row">
                        <button onClick={() => move("North")} className="arrow-button-up" data-testid="arrow-button-up">
                            <div className="arrow-up" data-testid="arrow-up">
                                <FontAwesomeIcon icon={faArrowUp} />
                            </div>
                        </button>
                    </div>
                    <div className="button-row">
                        <button onClick={() => move("West")} className="arrow-button-left" data-testid="arrow-button-left">
                            <div className="arrow-left" data-testid="arrow-left">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                        </button>
                        <button onClick={() => move("East")} className="arrow-button-right" data-testid="arrow-button-right">
                            <div className="arrow-right" data-testid="arrow-right">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </button>
                    </div>
                    <div className="button-row">
                        <button onClick={() => move("South")} className="arrow-button-down" data-testid="arrow-button-down">
                            <div className="arrow-down" data-testid="arrow-down">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
