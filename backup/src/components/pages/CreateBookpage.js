import React from 'react';
import '../style/CreateBook.css'

const CreateBook = () => {
  return (
    <div className="form-container">
  
      <form className="form">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" />
        </div>
        <div className="form-field">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea id="description"></textarea>
        </div>
        <div className="form-field">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBook;
