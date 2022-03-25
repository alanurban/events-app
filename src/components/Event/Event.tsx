import { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Button,
  LinkIcon,
  Grid,
  Divider,
  Chip,
  AttachMoneyIcon,
  EventIcon,
  Box,
} from '../../material-ui';
import { BreadcrumbNavigation, Image, ImageStyleProps, LikeButton } from '..';
import { EventModel } from '../../models';
import noPicture from '../../images/no-picture.png';

const ImageStyle: ImageStyleProps = {
  container: { display: 'flex', position: 'relative' },
  image: { margin: 'auto', width: '100%', maxHeight: '700px' },
};

const EVENT_IMAGE_COMMON_NAME = 'TABLET_LANDSCAPE_16_9';

export interface EventState {
  event: EventModel;
}

export const Event: FC = () => {
  const event = useSelector<EventState, EventModel>((state: EventState) => state.event);

  const getPriceLabel = (): string =>
    event.priceRanges ? `${event.priceRanges[0].min} - ${event.priceRanges[0].max}` : '';

  const findLargeImage = (): string | undefined =>
    event.images?.find((image) => image.url.includes(EVENT_IMAGE_COMMON_NAME))?.url;

  const getDataLabel = (): string =>
    `${event.dates?.start?.localDate ? event.dates.start.localDate : ''} ${
      event.dates?.start?.localTime ? event.dates.start.localTime : ''
    }`;

  const getAddressLabel = (): string => {
    const venueAddress = event._embedded?.venues[0];
    return (
      venueAddress &&
      `${venueAddress.address.line1}, ${venueAddress.city.name}, ${venueAddress.country.name}`
    );
  };

  return (
    <div data-testid='Event'>
      <BreadcrumbNavigation lastPath={event.name} />
      <Container maxWidth='lg'>
        <Image alt={event.name} src={findLargeImage() || noPicture} style={ImageStyle}>
          <Chip
            icon={<AttachMoneyIcon />}
            color='warning'
            label={getPriceLabel()}
            variant='filled'
            sx={{ position: 'absolute', bottom: '5%', right: '5%' }}
          />
          <LikeButton item={event} />
        </Image>
        <Grid container sx={{ alignItems: 'center', mt: 2 }}>
          <Grid item xs={10}>
            <Typography variant='h2' component='div' gutterBottom>
              {event.name}
            </Typography>
            <Typography variant='h6' component='div' gutterBottom sx={{ color: 'text.secondary' }}>
              {getAddressLabel()}
            </Typography>
            <Typography
              variant='subtitle1'
              component='div'
              gutterBottom
              sx={{ color: 'text.secondary' }}
            >
              {event?.info}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ display: 'grid', p: 1, m: 1 }}>
              <Button
                href={event?.url ?? '#'}
                variant='outlined'
                startIcon={<LinkIcon />}
                sx={{ mx: 'auto', mb: 2 }}
              >
                Go to Event
              </Button>
              <Chip
                icon={<EventIcon />}
                color='default'
                label={getDataLabel()}
                variant='outlined'
              />
            </Box>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </div>
  );
};
