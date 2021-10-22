const mongoose = require('mongoose')


const booksSchema= new mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
            unique: true,
            dropDups: true,
            index: true,
        },
        name:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        coverImage:{

        }
    },
    {
        timestamps:{
            createdAt:'create_at',
            updatedAt:'update_at'
        },

    }

    )

module.exports =mongoose.model('books',booksSchema,'books')
