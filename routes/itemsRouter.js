const express = require("express");

//create router
const router = express.Router();

//create a JSON data array

let data = [
    {
        id: 1,
        title: "Create a project",
        order: 1,
        completed: true,
        createdOn: new Date(),
      },
      {
        id: 2,
        title: "Take a cofféé",
        order: 2,
        completed: true,
        createdOn: new Date(),
      },
      {
        id: 3,
        title: "Write new article",
        order: 3,
        completed: true,
        createdOn: new Date(),
      },
      {
        id: 4,
        title: "Walk toward home",
        order: 4,
        completed: false,
        createdOn: new Date(),
      },
      {
        id: 5,
        title: "Have some dinner",
        order: 5,
        completed: false,
        createdOn: new Date(),
      },
]

//end-point which return JSON data array
router.get('/',(req,res) => {
    res.status(200).json(data);
});

//return an object from a data by id
router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const item = data.find((item)=>item.id == id);
    if(item){
        res.status(200).json(item);
    }else{
        res.sendStatus(404);
    }
})

//delete 
router.delete("/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  data = data.filter((item) => item.id !== id);
  res.status(200).json({message: "Successfully deleted"});
});

//insert new item 
router.post("/",(req,res)=>{
  const newItem = req.body;
  newItem.id = data[data.length -1].id + 1;
  newItem.createdOn = new Date();
  data = {...data,newItem};
  res.status(200).json(data);

})

//update item
router.put("/:id",(req,res)=>{
  const id = parseInt(req.params.id);

  
  const itemIndex = data.findIndex((item) =>item.id === id)



  if(itemIndex === -1){
    res.status(404).json({message:"No item found "});
  }
  else{
    data[itemIndex] = {...data[itemIndex],...req.body};
    res.status(200).json(data);

  }
  
});
module.exports = router;