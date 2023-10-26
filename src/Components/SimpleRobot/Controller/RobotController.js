import React from "react";
import { RobotModel } from "../Model/RobotModel";
import { Robot } from "../View/Robot";

export function RobotController() {
    const { position, setPosition } = RobotModel();

    const moveWithDelay = (newX, newY) => {
        const distance = Math.abs(newX - position.x) + Math.abs(newY - position.y);
        const delay = distance * 500;
        setTimeout(() => {
            setPosition({ x: newX, y: newY });
        }, delay);
    };

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

    return <Robot position={position} moveWithDelay={moveWithDelay} move={move} />;
}
