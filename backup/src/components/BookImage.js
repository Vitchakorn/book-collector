import React, { useState, useEffect } from 'react';

const BookImage = () => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/books/647b186e29307670a9ced694'); // Replace with your backend API endpoint to retrieve book details
      console.log(response)
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.log('Error fetching book details:', error);
    }
  };

  return (
    <div>
      {book && (
        <div>
          <h2>{book.name}</h2>
          <h3>{book.author}</h3>
          <p>{book.description}</p>
          {book.image && (
            <img
              src={`data:${book.image.contentType};base64,${book.image.data}`}
              alt="Book Cover"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default BookImage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BookImage = () => {
//     const [imageUrl, setImageUrl] = useState('');

//     const backendUrl = 'http://localhost:5001'
//     const bookId = "647b186e29307670a9ced694"

//   useEffect(() => {
//     // Fetch the image URL from the backend
//     const fetchImageUrl = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/api/books/${bookId}/image`, {
//           responseType: 'arraybuffer',
//         });

//         const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
//         const url = URL.createObjectURL(imageBlob);
//         setImageUrl(url);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchImageUrl();

//     // Clean up the URL when component unmounts
//     return () => {
//       URL.revokeObjectURL(imageUrl);
//     };
//   }, [bookId, backendUrl]);

//   return (
//     <div>
//       {imageUrl && <img src={imageUrl} alt="Book" />}
//     </div>
//   );
// };

// export default BookImage;