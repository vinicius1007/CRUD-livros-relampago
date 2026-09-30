const booksList = require("../data/books")

const findAll = () => {
    return booksList
}

const create = (book) => {
    booksList.push(book)

    return book
}

const findById = (id) => {
    return booksList.find( book => book.id === id )
}

const update = (id, data) => {
    const book = booksList.find( book => book.id === id )

    if (!book) return null

    if(data.title){
        book.title = data.title
    }

    if(data.author){
        book.author = data.author
    }

    return book
}

const remove = (id) => {
    const index = booksList.findIndex( book => book.id === id )

    if (index === -1) return null

    const deletedBook = booksList[index]

    booksList.splice(index, 1)

    return deletedBook
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    remove
}