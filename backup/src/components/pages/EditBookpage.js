// import React, { useEffect, useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import '../style/EditBook.css'
// import axios from 'axios';
// import "@fontsource/nunito"; 
// import "@fontsource/nunito/400.css";
// import BookDetails from './BookDetail';


// const styledNunito = {
//     fontFamily: 'Nunito, sans-serif',
//     fontWeight: 400,
//   }

function EditBook() {
//     const [category, setCategory] = useState('ALL');
//     const [bookList, setBookList] = useState([]);


//     const fetchBooks = async () => {
//             try {
//                 const response = await fetch(bookUrl); 
//                 const bookListData = await response.json();
//                 // const updatedBookList = bookListData.data.map((bookList, index) => ({
//                 //     ...bookList,
//                 //     id: index + 1
//                 //     }));
//                 setBookList(bookListData);
//             } catch (err) {
//               console.log('Error fetching book details:', err);
//             }
//           };

//     useEffect(() => {
//         fetchBooks();
//     }, []);

    //  const handleClick = async(e) => {
    //     try {
    //         setCategory(e)
    //         const response = await fetch(bookUrl + '/category', {
    //             method: 'POST',
    //             headers: {
    //             'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ category : e }),
    //         })
    //         const bookListData = await response.json();
    //         setBookList(bookListData);
    //         } catch (error) {
    //         console.log('Error adding book:', error);
    //     }
    //   };
    

     
  return (
    <div>
        {/* <div className="edit-book-text">
            <h1>Edit Book</h1>
        </div>

        <div className="edit-books-container">
            {bookList.map(bookList => (
                <div className="book-item" key={bookList.id}> 
                    <BookDetails bookList={bookList} />
                </div>
            ))}
    
        </div> */}
        
    </div>
  )
}

export default EditBook


