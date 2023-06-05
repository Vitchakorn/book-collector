import React, {useEffect, useState} from 'react'
import '../style/Collectionpage.css'
import { collectionUrl } from '../api/api';
import authConfig from '../api/authConfig';
import CollectionDetails from '../CollectionDetail';

function Collection() {
  const [collectionList, setCollectionList] = useState([]);

    useEffect(() => {
        const fetchcollections = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/collections/', authConfig); // Replace with your backend API endpoint to retrieve book details
                console.log(response)
                const collectionListData = await response.json();
                console.log(collectionListData)
                setCollectionList(collectionListData);
            } catch (err) {
              console.log('Error fetching collection details:', err);
            }
          };
      
        fetchcollections();
    }, []);

  return (
    <div className="collection-container">
      <h1>My Collection</h1>
      {collectionList.map(collectionList => (
          <div className="collection-item"> 
            <CollectionDetails collectionList={collectionList} />
          </div>
      ))}



      <div className="collection-add">
        <i></i>
        <h2>+</h2>
      </div>
    </div>
    
  )
}

export default Collection