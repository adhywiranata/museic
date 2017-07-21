import React from 'react';
import glamorous from 'glamorous';

import ItemCard from './core/ItemCard';

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

const AlbumList = ({ items }) => (
  <List>
     { items.map((item, index) => <ItemCard key={index} {...item} />)} 
  </List>
);

export default AlbumList;
