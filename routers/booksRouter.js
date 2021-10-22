const booksSchema= require("../models/booksSchema")

module.exports=function (fastify,options,done){

    fastify.get('/',(req,res)=>{
        booksSchema.find({}).then(data=>{
            res.send(data)
        }).catch(err=>res.send(err))
    })

    fastify.get('/:id',(req,res)=>{
        booksSchema.findOne({id:req.params.id}).then(data=>{
            if (data){
                res.send(data)
            }else {
                res.send({})
            }

        }).catch(err=>res.send(err))
    })

    fastify.delete('/:id',(req,res)=>{
        booksSchema.findOneAndDelete({id:req.params.id}).then(data=>{
            if (data){
                res.send(data)
            }else {
                res.send({message:`Book id ${req.params.id} not Found`})
            }

        }).catch(err=>res.send(err))
    })


    fastify.put('/:id',(req,res)=>{
        let data=req.body
        if (data.id){
            delete data['id']
        }

        booksSchema.findOneAndUpdate({id:req.params.id},data,{new: true}).then(data=>{
            res.send(data)
        }).catch(err=>res.send(err))
    })

    fastify.post('/',(req,res)=>{
        const book = new booksSchema(req.body)
        book.save().then(data=>{
            res.send(data)
        }).catch(err=>{
            res.status(400).send(err)
        })
    })



    done()
}
