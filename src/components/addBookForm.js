import React from 'react'
// import uniqid from 'uniqid'

let AddBookForm = ({ onSubmit }) => {
  // const bookID = uniqid();
  // const [bookTitle, setTitle] = useState(null);
  // const [bookCategory, setCategory] = useState(null);


  const updateTitle = (event) => { // the curly brace opens a multiline function
    // setTitle(event.target.value)
  };
  const updateAuthor = (event) => { // the curly brace opens a multiline function
    // setCategory(event.target.value)
  };
 
  // const newBook = {
  //   id: bookID,
  //   title: bookTitle,
  //   category: bookCategory,
  // };

  const submitBook = () => {
   
  };

  return (
    <div>
      <h3>Add new book</h3>
      <form>
        <label>Title:</label>
        <br />
        <input type="text" className="title" name="title" onChange={updateTitle} />
        <br />
        <label>Category:</label>
        <br />
        <input type="text" className="category" name="category" onChange={updateAuthor} />
        <br />
        <input type="submit" value="Submit" onClick={submitBook} />
      </form>
    </div>
  );
};

export default AddBookForm
