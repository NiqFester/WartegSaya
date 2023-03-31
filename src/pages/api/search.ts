import path from "path";
import fs from "fs"; //allows to read and overwrite data
import type { NextApiRequest, NextApiResponse } from 'next'
import './global'
function extractData(filePath:string) {
  //extract data.json and extract the data
  const jsonData= fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

function buildPath() {
  //access to path
  return path.join(
    process.cwd(), //root
    "data",
    "data.json" //all path
  );
}
const filepath = buildPath();

export default function handler(req: NextApiRequest, res:NextApiResponse) {
  const {method,query} = req
  const {search}= query
  const {Produk}:{Produk: produk[]} = extractData(filepath)
  let returnedObj = {
  }
  if (method=== "GET") {
    const filteredData = Produk.filter((el)=>{
      if(search===''){
        return el
      }
      return el.nama.toLowerCase().includes(typeof search==="string"?search:typeof search==="undefined"?'nothing':Array.isArray(search)?search[0]:'else')
    })
    returnedObj= {message:'success', data:filteredData.slice(0,3)}
  }
  
  res
    .status(200) //status that everything is good... insert meme here please!
    .json(returnedObj);
}