import React from 'react';
import ReactDOM from 'react-dom';

//add css
import './index.css'

const firstBook ={
  img:'https://m.media-amazon.com/images/I/81NI6sqvvkL._AC_UY218_.jpg',
  title:'A Promised Land',
  author:'by Barack Obama and Random House Audio',
}
const secondBook ={
  img:'https://m.media-amazon.com/images/I/81PNeyIYVfL._AC_UY218_.jpg',
  title:'Greenlights',
  author:'by Matthew McConaughey and Random House Audio',
}
const thirdBook ={
  img:'https://m.media-amazon.com/images/I/91AQs6qv9ML._AC_UY218_.jpg',
  title:'Untamed',
  author:'by Glennon Doyle and Glennon Doyle Melton',
}

function BookList (){
  return (
    <section className="booklist">
      <Book 
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}
      />
      <Book 
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}
      />
      <Book 
      img={thirdBook.img}
      title={thirdBook.title}
      author={thirdBook.author}
      />
      <Book /><Book /><Book />
      
    </section>
  );
}

const Book = (props) =>{
 const {img,title,author} = props;
  return(
  <article className='book'>
    <img src={img} />
    <h1>{title}</h1>
    <h3>{author}</h3>
  </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));