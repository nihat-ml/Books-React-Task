import React from "react";

const BooksDetail = ({ book, closeDetail }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button onClick={closeDetail} style={{ marginLeft: "auto", display: "block" }}>
          Close
        </button>
        <h2>{book.title}</h2>
        <img src={book.image} alt={book.title} style={{ width: "200px" }} />
        <p>{book.description}</p>
        <p>Author: {book.author}</p>
        <p>Price: ${book.price}</p>
        
      </div>
    </div>
  );
};

export default BooksDetail;
