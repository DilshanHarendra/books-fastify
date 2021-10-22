module.exports=function (fastify,options,done){

    fastify.get('/',(req,res)=>{
        res.send({
            message:'book1'
        })
    })
    done()
}
