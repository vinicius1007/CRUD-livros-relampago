const books = require("../data/books")

const findAll = () => {
    return books
}

const create = (book) => {
    books.push(book)

    return book
}

const findById = (id) => {
    return books.find( book => book.id === id )
}

const update = (id, data) => {
    const book = books.find( book => book.id === id )

    if (!book) return null

    if(data.title){
        book.title = data.title
    }

      if(data.author){
        book.author = data.author
    }

    return book
}

// const remove = (id) => {
//     const index = books.findIndex( user => user.id === id )

//     if (index === -1) return null

//     const deletedUser = books[index]

//     books.splice(index, 1)

//     return deletedUser
// }

module.exports = {
    findAll,
    create,
    findById,
    update,
    // remove
}