import { FC, useEffect, useState } from 'react';
import { LazyLoadingList } from '../..';
import { useEventsLiked } from '../../../hooks/EventsLiked.hook';
import { Container } from '../../../material-ui';
import { PaginationParameters } from '../../../models/Pagination';
import { INITIALIZE_PAGE_NUMBER } from '../../../utils';

const LikeList: FC<PaginationParameters> = ({ page }: PaginationParameters) => {
  const eventsLiked = useEventsLiked();
  const [pageNumberState, setPageNumberState] = useState(page || INITIALIZE_PAGE_NUMBER);

  useEffect(() => {
    eventsLiked.setStorageItem();
  }, []);

  return (
    <div data-testid='LikeList'>
      <Container maxWidth='lg'>
        <LazyLoadingList
          data={eventsLiked.favorites}
          pageNumberState={pageNumberState}
          setPageNumberState={setPageNumberState}
        />
      </Container>
    </div>
  );
};

export default LikeList;
