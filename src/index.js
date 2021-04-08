import React from 'react';
import reactDom from 'react-dom';

//add css
import './index.css'
import {books} from './books'
import {Book} from './Book'


function Booklist() {
  return (
    <section className="booklist">
      {books.map((book)=>{
        return <Book key={book.id} book={book}> </Book>;
        //return <Book key={book.id} {...book}></Book>; = This is for spread opration
      })}
    </section>
  );
}
reactDom.render(<Booklist />,document.getElementById("root"));

//====SOLVE THIS AMAJON BOOK LIST PROJECT USING OBJECT A)firstBook B)secondBook=======

// const firstBook ={
//   img:'https://m.media-amazon.com/images/I/81NI6sqvvkL._AC_UY218_.jpg',
//   title:'A Promised Land',
//   author:'by Barack Obama and Random House Audio',
// }
// const secondBook ={
//   img:'https://m.media-amazon.com/images/I/81PNeyIYVfL._AC_UY218_.jpg',
//   title:'Greenlights',
//   author:'by Matthew McConaughey and Random House Audio',
// }
// const thirdBook ={
//   img:'https://m.media-amazon.com/images/I/91AQs6qv9ML._AC_UY218_.jpg',
//   title:'Untamed',
//   author:'by Glennon Doyle and Glennon Doyle Melton',
// }

// function BookList (){
//   return (
//     <section className="booklist">
//       <Book 
//       img={firstBook.img}
//       title={firstBook.title}
//       author={firstBook.author}
//       />
//       <Book 
//       img={secondBook.img}
//       title={secondBook.title}
//       author={secondBook.author}
//       />
//       <Book 
//       img={thirdBook.img}
//       title={thirdBook.title}
//       author={thirdBook.author}
//       />
//       <Book /><Book /><Book />
      
//     </section>
//   );
// }

// const Book = (props) =>{
//  const {img,title,author} = props;
//   return(
//   <article className='book'>
//     <img src={img} />
//     <h1>{title}</h1>
//     <h3>{author}</h3>
//   </article>
//   );
// }

// ReactDOM.render(<BookList />, document.getElementById("root"));


//===NOW WE SOLVE THIS PROJECT USING MAP METHODE THAT'S IS VERY EFICIENT AND MODERN CODE=== 
// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// Note: map() does not execute the function for array elements without values.
// Note: this method does not change the original array.

//get the all object into an book array[] time:2.45- 3.00

// const books =[
//   
//       {
//         id:1,
//         img:'https://m.media-amazon.com/images/I/81NI6sqvvkL._AC_UY218_.jpg',
//         title:'A Promised Land',
//         author:'by Barack Obama and Random House Audio',
//       },
//       {
//         id:2,
//         img:'https://m.media-amazon.com/images/I/81PNeyIYVfL._AC_UY218_.jpg',
//         title:'Greenlights',
//         author:'by Matthew McConaughey and Random House Audio',
//       },
//       {
//         id:3,
//         img:'https://m.media-amazon.com/images/I/91AQs6qv9ML._AC_UY218_.jpg',
//         title:'Untamed',
//         author:'by Glennon Doyle and Glennon Doyle Melton',
//       },
//       {
//         id:4,
//         img:'https://m.media-amazon.com/images/I/91AQs6qv9ML._AC_UY218_.jpg',
//         title:'Untamed',
//         author:'by Glennon Doyle and Glennon Doyle Melton',
//       },
//       {
//         id:5,
//         img:'https://m.media-amazon.com/images/I/81NI6sqvvkL._AC_UY218_.jpg',
//         title:'A Promised Land',
//         author:'by Barack Obama and Random House Audio',
//       },
//       {
//         id:6,
//         img:'https://m.media-amazon.com/images/I/81PNeyIYVfL._AC_UY218_.jpg',
//         title:'Greenlights',
//         author:'by Matthew McConaughey and Random House Audio',
//       },
// ];



// function Booklist() {
//   return (
//     <section className="booklist">
//       {books.map((book)=>{
//         return <Book key={book.id} book={book}> </Book>;
//         //return <Book key={book.id} {...book}></Book>; = This is for spread opration
//       })}
//     </section>
//   );
// }
// export const Book = (props) =>{
//  const {img,title,author} = props.book;
//   return(
//   <article className='book'>
//     <img src={img} />
//     <h1>{title}</h1>
//     <h3>{author}</h3>
//   </article>
//   );
// }

//const Book = ({img,title,author}) =>{other think are same = For spread opration}

// reactDom.render(<Booklist />,document.getElementById("root"));
