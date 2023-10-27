import { act } from 'react-dom/test-utils';
import { RobotModel } from './RobotModel';
import { renderHook } from '@testing-library/react';

describe('RobotModel Component', () => {
    test('returns the initial position and setPosition function', () => {
        const { result } = renderHook(() => RobotModel());

        expect(result.current.position).toEqual({ x: 1, y: 1 });
        expect(typeof result.current.setPosition).toBe('function');
    });

    test('updates the position when setPosition is called', () => {
        const { result } = renderHook(() => RobotModel());
        const newPosition = { x: 2, y: 2 };

        act(() => {
            result.current.setPosition(newPosition);
        });

        expect(result.current.position).toEqual(newPosition);
    });
});
