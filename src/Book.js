import React from 'react'

export const Book = (props) =>{
 const {img,title,author} = props.book;
  return(
  <article className='book'>
    <img src={img} />
    <h1>{title}</h1>
    <h3>{author}</h3>
  </article>
  );
}

//export default Book
