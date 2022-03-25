import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LikeButton } from './LikeButton';
import { EventEmptyModel } from '../../../mocks/EventEmptyModel';

describe('<Like />', () => {
  test('it should mount', () => {
    render(<LikeButton item={EventEmptyModel} />);

    const likeButton = screen.getByTestId('LikeButton');

    expect(likeButton).toBeInTheDocument();
  });
});
