import React from 'react';
import glamorous from 'glamorous';

import ItemCard from './core/ItemCard';

const List = glamorous.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: 100,
  boxSizing: 'border-box',
});

const ArtistList = ({ items }) => (
  <List>
    {items.map((item, index) => <ItemCard key={index} {...item} />)}
  </List>
);

export default ArtistList;
