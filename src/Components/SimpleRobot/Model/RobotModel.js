import { useState } from "react";

export function RobotModel() {
    const [position, setPosition] = useState({ x: 1, y: 1 });

    return {
        position,
        setPosition,
    };
};
