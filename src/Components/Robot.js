import React, { useState } from "react";
import "./Robot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowRight, faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Robot = () => {
    const [position, setPosition] = useState({ x: 1, y: 1 });

    const move = (direction) => {
        const { x, y } = position;
        switch (direction) {
            case "North":
                setPosition({ x, y: Math.min(y + 1, 5) });
                break;
            case "East":
                setPosition({ x: Math.min(x + 1, 5), y });
                break;
            case "South":
                setPosition({ x, y: Math.max(y - 1, 1) });
                break;
            case "West":
                setPosition({ x: Math.max(x - 1, 1), y });
                break;
            default:
                break;
        }
    };

    const renderGrid = () => {
        const grid = [];
        for (let i = 5; i >= 1; i--) {
            const row = [];
            for (let j = 1; j <= 5; j++) {
                const isRobotHere = i === position.y && j === position.x;
                row.push(
                    <div
                        key={`${i}-${j}`}
                        className={`cell ${isRobotHere ? "robot" : ""}`}
                        onClick={() => setPosition({ x: j, y: i })}
                    >
                        {isRobotHere && "🤖"} {/* Display a robot emoji */}
                    </div>
                );
            }
            grid.push(<div key={i} className="row">{row}</div>);
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
                        <button onClick={() => move("North")} className="arrow-button">
                            <div className="arrow-up">
                                <FontAwesomeIcon icon={faArrowUp} />
                            </div>
                        </button>
                    </div>
                    <div className="button-row">
                        <button onClick={() => move("West")} className="arrow-button">
                            <div className="arrow-left">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                        </button>
                        <button onClick={() => move("East")} className="arrow-button">
                            <div className="arrow-right">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </button>
                    </div>
                    <div className="button-row">
                        <button onClick={() => move("South")} className="arrow-button">
                            <div className="arrow-down">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Robot;