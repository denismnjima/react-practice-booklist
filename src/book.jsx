import './App.css'
function Book({book}){
    return(
        <div className='book'>
            <h2>{book.title}</h2>
            <p>No of Assignees:{book.assign}</p>
        </div>
    )
}
export default Book