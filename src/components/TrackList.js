import React from 'react';
import { Link } from 'react-router-dom';

import ItemCard from './core/ItemCard';

const styles = {
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 100,
    boxSizing: 'border-box',
  },
  card: {
    width: '20%',
    margin: '20px 10px',
    padding: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingBottom: 20,
  },
};

const TrackList = ({ items }) => (
  <div style={styles.list}>
    {items.map((item, index) => <ItemCard key={index} {...item} />)}
  </div>
);

export default TrackList;
