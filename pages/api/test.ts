import type { NextApiRequest,NextApiResponse } from "next" 

export  default async (req:NextApiRequest,res:NextApiResponse) => {
let body =JSON.parse(req.body)

console.log(body)
res.send({code:0})




}