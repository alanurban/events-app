import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LikeList from './LikeList';

describe('<LikeList />', () => {
  test('it should mount', () => {
    render(<LikeList />);
    
    const likeList = screen.getByTestId('LikeList');

    expect(likeList).toBeInTheDocument();
  });
});