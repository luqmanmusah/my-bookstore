import React from 'react'


let AddBookForm = ({ onSubmit }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onSubmit(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  )
}

export default AddBookForm