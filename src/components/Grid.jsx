import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Loader from 'react-loader-spinner';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { Context } from '../store';
import SingleCard from './SingleCard';

const Grid = () => {
  const { store, dispatch } = useContext(Context);
  const [loader, setLoader] = useState(false);

  const renderCards = (cards) => {
    // if no cards or no filtered cards, return no cards found
    if (
      cards.length === 0 ||
      (store.filteredCards.length === 0 && store.filter)
    )
      return <h1>No cards were found</h1>;
    // else return mapped cards
    return cards.map((card) => <SingleCard card={card} key={card.id} />);
  };

  // infinite scrolling
  const bottomBoundaryRef = useRef(null);
  useInfiniteScroll(bottomBoundaryRef, dispatch);

  useEffect(() => {
    // fetch cards from elder scrolls legends
    const fetchData = async () => {
      setLoader(true);

      try {
        const { data } = await axios.get(process.env.REACT_APP_API_URL, {
          params: {
            pageSize: 20,
            page: store.page,
          },
        });

        // update cards in global store
        dispatch({
          type: 'updateCards',
          cards: data.cards,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching cards from API: ', error);
      }

      setLoader(false);
    };

    fetchData();
  }, [dispatch, store.page]);

  return (
    <>
      <div className="grid d-flex justify-content-center justify-content-sm-between flex-wrap">
        {renderCards(
          store.filteredCards.length > 0 ? store.filteredCards : store.cards,
        )}
      </div>

      {loader && (
        <Loader
          style={{ height: '100vh' }}
          className="d-flex justify-content-center"
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}

      {!store.filter && <div ref={bottomBoundaryRef} />}
    </>
  );
};

export default Grid;
