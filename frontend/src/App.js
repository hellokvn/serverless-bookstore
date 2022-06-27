import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { getBookById } from './graphql/queries/book';
import { onCreatedBook } from './graphql/subscriptions/book';
import './App.css';

function App() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        console.log('sub');
        API.graphql(graphqlOperation(onCreatedBook, { author: 'test' })).subscribe({
          next: (data) => {
            console.log('SUBSCRIBED EVENT', { data });
          },
        });
      } catch (e) {
        console.log('err ', e);
      }
    })();
  }, []);

  const getBook = async () => {
    // make a call to appsync api
    // const book = await API.graphql(graphqlOperation(getBookById, { id: "97d97d2d-87b6-4e81-97da-8a63a1f8ae9f" }));

    const book = await API.graphql({
      query: getBookById,
      variables: { id: '863977fc-3b3c-497e-b56d-e6f2b7f3729a' },
      // authMode: 'AWS_IAM',
    });

    console.log({ book });

    if (!book) {
      return;
    }

    setBook(book.data.getBookById);
  };

  const viewBook = () => {
    if (book) {
      return (
        <article>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>{book.author}</p>
          <h4>{book.price}</h4>
        </article>
      );
    }
  };

  return (
    <div>
      <AmplifySignOut />
      <section className="book-section">
        <button onClick={() => getBook()}>Get book details</button>
        <hr />
        {viewBook()}
      </section>
    </div>
  );
}

export default withAuthenticator(App);
