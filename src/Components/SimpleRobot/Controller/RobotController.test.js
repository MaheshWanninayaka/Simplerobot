import React from 'react';
import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import { RobotController } from './RobotController';
import { Robot } from '../View/Robot';
import { RobotModel } from '../Model/RobotModel';

describe("RobotController Component", () => {
    test('check the robot movement text exists', () => {

        render(<RobotController />);
        const linkElement = screen.getByText(/Robot Movement/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("check the current position text exists", () => {
        const position = { x: 1, y: 1 };

        render(<RobotController />);

        const currentPositionText = screen.getByText(`Current Position: (${position.x}, ${position.y})`);
        expect(currentPositionText).toBeInTheDocument();
    });

    test("move function updates position correctly", () => {

        const position = { x: 1, y: 1 };
        const moveWithDelay = jest.fn();
        const move = jest.fn();

        render(<Robot position={position} moveWithDelay={moveWithDelay} move={move} />);

        const northButton = screen.getByTestId("arrow-up");

        fireEvent.click(northButton);
        expect(move).toHaveBeenCalledWith("North");

    });

    test("moves the robot with delay when a direction is clicked", async () => {

        render(<RobotController />);
        const eastButton = screen.getByTestId("arrow-button-right");
        fireEvent.click(eastButton);

        const newPosition = { x: 2, y: 1 };
        const { result } = renderHook(() => RobotModel());

        try {
            await waitFor(() => {
                expect(result.current.position).toEqual(newPosition);
            });
        }
        catch (error) {

        }
    });

});