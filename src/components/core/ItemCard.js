import React from 'react';
import glamorous from 'glamorous';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = glamorous.div({
  width: '25%',
  margin: '20px 10px',
  padding: 0,
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  paddingBottom: 20,
  '@media(max-width: 768px)': {
    width: '45%',
  },
  '@media(max-width: 480px)': {
    width: '100%',
  },
  '&:hover img': {
    transform: 'scale(1.3) rotate(5deg)',
    transition: '0.3s',
  },
});

const Box = glamorous.div({});

const RelativeBox = glamorous.div({
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  width: '100%',
  height: 250,
  padding: 20,
});

const BoxImg = glamorous.img({
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  transition: '0.3s',
});

const ImageOverlay = glamorous.div({
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0, .8)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

const Title = glamorous.h4({
  color: '#FFFFFF',
  bottom: 20,
  margin: 10,
  textAlign: 'center',
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: 'normal',
  fontSize: '1.2rem',
});

const Text = glamorous.p({
  fontSize: '0.8em',
  color: '#666666',
});

const Ul = glamorous.ul({
  padding: 0,
});

const Li = glamorous.li({
  color: '#1ED760',
  fontSize: '0.8em',
  padding: 0,
  listStyleType: 'none',
});

export default ({ name, images, artists, popularity, release_date }) => (
  <Card>
    <RelativeBox>
      <BoxImg src={images[0].url} width="100%" alt={name} />
      <ImageOverlay>
        <Title>{name}</Title>
      </ImageOverlay>
    </RelativeBox>
    <Box>
      {
        release_date && (
          <Text>
            {`
              Released on  
              ${moment(release_date, 'YYYY-MM-DD').format('DD MMM Y')}
            `}
          </Text>
        )
      }
      { popularity && <Text>Popularity: {popularity}</Text> }
      <Ul style={{ padding: 0 }}>
        { artists && artists.map(artist => (
          <Link key={artist.id} to={`/artist/${artist.id}`} style={{ textDecoration: 'none' }}>
            <Li>
              {artist.name}
            </Li>
          </Link>),
        )}
      </Ul>
    </Box>
  </Card>
);