import axios from "axios"
import { createContext, useEffect, useState } from "react"
export let booksContext = createContext()


function BooksProvider({children}){
    let [books, setBooks] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get("http://localhost:3000/books")
        .then(res=>{
            setBooks(res.data)
            setLoading(false)
        })
    },[])
    let value={
        books,
        loading,
        setLoading,
        setBooks
    }

    return <booksContext.Provider value={value}>{children}</booksContext.Provider>
}

export default BooksProvider