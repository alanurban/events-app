import { FC, useEffect } from 'react';
import { useEventsLiked } from '../../../hooks/EventsLiked.hook';
import { FavoriteIcon, IconButton, FavoriteBorderIcon } from '../../../material-ui';
import { LikeProps } from '../../../models';

export const EVENT_STORAGE_KEY = 'event-favorites-list';

export const LikeButton: FC<LikeProps> = ({ item }) => {
  const eventsLiked = useEventsLiked({ item });

  const onClickLike = (): void =>
    eventsLiked.isLiked ? eventsLiked.dislike() : eventsLiked.like();

  useEffect(() => {
    eventsLiked.setStorageItem();
  }, []);

  return (
    <div data-testid='LikeButton'>
      <IconButton
        aria-label={eventsLiked.isLiked ? 'dislike' : 'like'}
        color='warning'
        sx={{ position: 'absolute', top: '5%', left: '5%' }}
        onClick={() => onClickLike()}
      >
        {eventsLiked.isLiked ? (
          <FavoriteIcon fontSize='large' />
        ) : (
          <FavoriteBorderIcon fontSize='large' />
        )}
      </IconButton>
    </div>
  );
};
