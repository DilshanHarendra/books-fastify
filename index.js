const fastify = require('fastify')({
    logger:true
})

//configs
require('./config/DatabseConnection')


//routers
fastify.register(require('./routers/booksRouter'),{prefix:'/api/v1/books'})

fastify.get('/',(req,res)=>{
    res.send({
        message:'hello'
    })
})


fastify.listen(8000,()=>console.log('running on http://localhost:8000'))
