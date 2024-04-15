import React, { useState, useEffect } from 'react';
import "../App.css";
export default function Quote() {
    const [quote, setQuote] = useState('');
    const [Author, setAuthor] = useState('');

    useEffect(() => {
        fetch('http://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    }, []);
  return (
    <div className='container' >
      <figure className="text-center mt-6" style={{margin: '100px 0px'}} >
  <blockquote className="blockquote" >
    <p style={{fontSize : '2rem'}}>{quote}</p>
  </blockquote>
  <figcaption className="blockquote-footer" style={{fontSize : '1rem'}}>
    {Author}
  </figcaption>
</figure>
    </div>
  )
}
