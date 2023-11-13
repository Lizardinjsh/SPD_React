import React from 'react';
import QuoteList from './QuoteList';
import Quote from './Quote';

function App() {
  return (
    <div>
      <h1>Quotes</h1>
      <QuoteList />
      <hr />
      <h1>Quote of the Day</h1>
      <Quote />
    </div>
  );
}

export default App;