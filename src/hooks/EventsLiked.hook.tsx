import { useState } from 'react';
import { EVENT_STORAGE_KEY } from '../components';
import { EventModel, FavoriteType, LikeProps } from '../models';

interface EventsLikedProps {
  favorites: FavoriteType[];
  dislike: () => void;
  like: () => void;
  setStorageItem: () => void;
  isLiked: EventModel | undefined;
}

export const useEventsLiked = (props?: LikeProps): EventsLikedProps => {
  const item = props && props.item;
  const [favorites, setFavorites] = useState<FavoriteType[]>([]);
  const isLiked = item && favorites.find((el) => el.id === item.id);

  const saveToLocalStorage = (items: FavoriteType[]): void => {
    localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(items));
  };

  const dislike = (): void => {
    const newFavoriteList = (item && favorites.filter((el) => el.id !== item.id)) || [];

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const like = (): void => {
    const newFavoriteList = (item && [...favorites, item]) || [];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const setStorageItem = (): void => {
    const storageItem = localStorage.getItem(EVENT_STORAGE_KEY);
    setFavorites(storageItem ? JSON.parse(localStorage.getItem(EVENT_STORAGE_KEY) || '') : []);
  };

  return {
    favorites,
    isLiked,
    dislike,
    like,
    setStorageItem,
  };
};
