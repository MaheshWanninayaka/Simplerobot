import React from 'react';
import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import { RobotController } from './RobotController';
import { Robot } from '../View/Robot';
import { RobotModel } from '../Model/RobotModel';

describe("RobotController", () => {
    test('renders robot movement text', () => {

        render(<RobotController />);
        const linkElement = screen.getByText(/Robot Movement/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("RobotController renders current position text", () => {
        const position = { x: 1, y: 1 };

        render(<RobotController />);

        const currentPositionText = screen.getByText(`Current Position: (${position.x}, ${position.y})`);
        expect(currentPositionText).toBeInTheDocument();
    });

    test("move function updates position correctly", () => {

        const position = { x: 1, y: 1 };
        const moveWithDelay = jest.fn();
        const move = jest.fn();

        const { getByTestId } = render(<Robot position={position} moveWithDelay={moveWithDelay} move={move} />);

        const northButton = getByTestId("arrow-up");

        fireEvent.click(northButton);
        expect(move).toHaveBeenCalledWith("North");

    });

    jest.mock("../Model/RobotModel", () => ({
        RobotModel: () => ({
            position: { x: 1, y: 1 },
            setPosition: jest.fn(),
        }),
    }));

    // test("moves the robot with delay when a direction is clicked", async () => {

    //     const { getByTestId } = render(<RobotController />);
    //     const eastButton = getByTestId("arrow-right");

    //     fireEvent.click(eastButton);

    //     // Calculate the expected new position based on the "moveWithDelay" logic

    //     const newPosition = { x: 2, y: 1 };


    //     // Use waitFor to wait for the new position to be set after the delay
    //     await waitFor(() => {
    //         const { result } = renderHook(() => RobotModel());
    //         console.log("result",result.current.position)
    //       expect(result.current.position).toEqual(newPosition);
    //     });
    //   });
});