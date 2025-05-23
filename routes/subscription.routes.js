import { Router } from "express";
const subscriptionRouter=Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send({title:"Get all subscriptions"})
})

subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:"Get  subscription details"})
})

subscriptionRouter.post('/',(req,res)=>{
    res.send({title:"Create subscriptions"})
})

subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:"update subscription"})
})

subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title:"Delete subscription"})
})

subscriptionRouter.get('/users/:id',(req,res)=>{
    res.send({title:"get all user subscriptions"})
})

subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:"cancel  subscriptions"})
})

subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title:"get all upcoming renewals"})
})


export default subscriptionRouter;