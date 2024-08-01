import Book from "./book.jsx"
import { useEffect, useState } from "react"
const base_URL = 'http://localhost:8000/books'
function App(){
  const [books, setBooks] = useState([])
  const findBooks= () => {
    fetch(base_URL)
    .then(res=>{
      if(!res.ok) throw new  Error('failed to fetch')
      return res.json()
    })
    .then(data=> setBooks(data))
    .catch(err=> console.log(err.message))
  }

  useEffect(() => {
    findBooks()
  },[])
  return (
    <>
    {
      books.length>0? 
      (
        <>
         { books.map((singlebook) =>( <Book book={singlebook} key={singlebook.id}/>))}
         </>     
      )
      :(
        <h2>No books found!</h2>
      )
    }
    </>
)

}
export default App