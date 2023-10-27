import { act } from 'react-dom/test-utils';
import { RobotModel } from './RobotModel'; // Import the RobotModel function
import { renderHook } from '@testing-library/react';

describe('RobotModel', () => {
    it('returns the initial position and setPosition function', () => {
        const { result } = renderHook(() => RobotModel());
        // Assert that the initial state is as expected
        expect(result.current.position).toEqual({ x: 1, y: 1 });

        // Assert that the setPosition function is a function
        expect(typeof result.current.setPosition).toBe('function');
    });

    it('updates the position when setPosition is called', () => {
        const { result } = renderHook(() => RobotModel());
        const newPosition = { x: 2, y: 2 };

        act(() => {
            result.current.setPosition(newPosition);
        });

        // Assert that the position has been updated
        expect(result.current.position).toEqual(newPosition);
    });
});
