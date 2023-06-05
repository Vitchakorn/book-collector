// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { collectionUrl } from './api/api';

// const BookDetail = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5001/api/contacts/647af7eb58168cda4bbd3db7')
//       .then(res => res.json())
//       .then(data => setContacts(data))
//   }, [])
  
//   console.log(contacts)

//   return (
//     <div>
//       <h2>Contacts</h2>
//       {contacts.map((contacts) => (
//         <div key={contacts._id}>
//           <h3>{contacts.name}</h3>
//           <p>Email: {contacts.email}</p>
//           <p>Phone: {contacts.phone}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookDetail;



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


import React, { useState, useEffect } from 'react';
import { bookUrl } from './api/api';

function CollectionDetails({collectionList}) {
  return (
        <div>
          <h2>{collectionList.name}</h2>
        </div>

  );
};

export default CollectionDetails;
