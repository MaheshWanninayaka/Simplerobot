import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Robot } from './Robot';

describe('Robot Component', () => {
    const Move = jest.fn();
    const MoveWithDelay = jest.fn();
    const position = { x: 1, y: 1 };

    test('renders correctly', () => {
        const { container } = render(
            <Robot position={position} move={Move} moveWithDelay={MoveWithDelay} />
        );
        expect(container).toMatchSnapshot();
    });

    test('displays the current position', () => {
        render(
            <Robot position={position} move={Move} moveWithDelay={MoveWithDelay} />
        );

        expect(screen.getByText(`Current Position: (${position.x}, ${position.y})`)).toBeInTheDocument();
    });

    test('handles move functions correctly', () => {
        render(
            <Robot position={position} move={Move} moveWithDelay={MoveWithDelay} />
        );

        fireEvent.click(screen.getByTestId('arrow-button-up'));
        expect(Move).toHaveBeenCalledWith('North');

        fireEvent.click(screen.getByTestId('arrow-button-left'));
        expect(Move).toHaveBeenCalledWith('West');

        fireEvent.click(screen.getByTestId('arrow-button-right'));
        expect(Move).toHaveBeenCalledWith('East');

        fireEvent.click(screen.getByTestId('arrow-button-down'));
        expect(Move).toHaveBeenCalledWith('South');
    });

    test('handles moveWithDelay function correctly', () => {
        render(
            <Robot position={position} move={Move} moveWithDelay={MoveWithDelay} />
        );

        const cell = screen.getByTestId(`cell-${position.x}-${position.y}`);
        fireEvent.click(cell);
        expect(MoveWithDelay).toHaveBeenCalledWith(position.x, position.y);
    });
});
