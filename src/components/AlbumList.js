import React from 'react';
import glamorous from 'glamorous';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Box = glamorous.div({});

const List = glamorous.div({
  flex: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  boxSizing: 'border-box',
  padding: 20,
  '@media(min-width: 768px)': {
    padding: 50,
  },
  '@media(min-width: 1024px)': {
    padding: 100,
  },
});

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
});

const RelativeBox = glamorous.div({
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  width: '100%',
  height: 250,
  padding: 20,
  '&:hover img': {
    transform: 'scale(1.3) rotate(5deg)',
    transition: '0.3s',
  },
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
  fontSize: '1.5rem',
});

const Text = glamorous.p({
  fontSize: '0.8em',
  color: '#333333',
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

const AlbumList = ({ items }) => (
  <List>
    { items.map((item, index) => (
      <Card key={index}>
        <RelativeBox>
          <BoxImg src={item.images[0].url} width="100%" alt={item.name} />
          <ImageOverlay>
            <Title>{item.name}</Title>
          </ImageOverlay>
        </RelativeBox>
        <Box>
          <Text>
            {`
              Released on:  
              ${moment(item.release_date, 'YYYY-MM-DD').format('DD MMM Y')}
            `}
          </Text>
          <Text>Popularity: { item.popularity }</Text>
          <Text>Artists</Text>
          <Ul style={{ padding: 0 }}>
            { item.artists.map(artist => (
              <Link key={artist.id} to={`/artist/${artist.id}`} style={{ textDecoration: 'none' }}>
                <Li>
                  { artist.name }
                </Li>
              </Link>),
            )}
          </Ul>
        </Box>
      </Card>
    ),
    )}
  </List>
);

export default AlbumList;
