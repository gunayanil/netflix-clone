import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionMap } from '../utils';

export const Browse = () => {
  const { series } = useContent('series');
  const { movies } = useContent('movies');
  const slides = selectionMap({ series, movies });

  return <BrowseContainer slides={slides} />;
};
