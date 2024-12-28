import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import BooksDetail from "../BooksDetail";
import { favoriteContext } from "../../../context/FavoritesContext";


function Books()  {
  const [books, setBooks] = useState([]);
  let  {favorites,setFavorites}=useContext(favoriteContext)
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  function handleAddFavorite(books){
    let findFavorite=favorites.find(favorite=>favorite.id==books.id)
    if(findFavorite){
        alert("Bu mehsul artiq favoritesde movducddur")
    }else{
        setFavorites([...favorites,books])
    }

}


  useEffect(() => {
  
    axios.get("http://localhost:5000/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleInfoClick = (book) => {
    setSelectedBook(book); 
  };

  const closeDetail = () => {
    setSelectedBook(null); 
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

     
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredBooks.map((book) => (
          <div key={book.id} style={{ border: "1px solid #ccc", padding: "20px" }}>
            <img src={book.image} alt={book.title} style={{ width: "150px" }} />
            <h3>{book.title}</h3>
            <button onClick={() => handleInfoClick(book)}>Info</button>
            <button  onClick={()=> handleAddFavorite(book)}>❤️</button>
            <button>🛒</button>
          </div>
        ))}
      </div>

     
      {selectedBook && (
        <BooksDetail book={selectedBook} closeDetail={closeDetail} />
      )}
    </div>
  );
};

export default Books;
