const { request } = require('express');
const express = require('express');
const cors = require("cors");
const Vehicle = require('./db/Vehicle');
const Deportpoint = require('./db/Deport_Point');
const Nodepoint = require('./db/Node_Point');
const Transshipmentpoint = require('./db/Transshipment_Point');
const Reliefpoint = require('./db/Relief_Point');
const Warehousepoint = require('./db/Warehouse_Point');
const Load = require('./db/Load');
const Pickup = require('./db/Pickup');


const Vehicleload = require('./db/Vehicle_Load');
require('./db/config')
 
 
const app = express();
app.use(express.json());
app.use(cors());



app.post("/add-vehicle", async (req,resp) =>{
  let vehicle = new Vehicle(req.body);
  let result = await vehicle.save();
  resp.send(result)

})

app.get("/vehicles",async (req,resp)=>{
  let vehicles = await Vehicle.find();
  if(vehicles.length>0){
    resp.send(vehicles)
  }else{
    resp.send({result :"No products found"})
  }
})

app.delete("/vehicle/:id",async (req,resp)=>{
 
  const result = await Vehicle.deleteOne({_id:req.params.id})
  resp.send(result);
});

app.get("/vehicle/:id",async (req,resp) =>{
  let result = await Vehicle.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);

  }else{
    resp.send({result : "no record found"})
  }
})

app.put("/vehicle/:id",async (req,resp) =>{
  let result = await Vehicle.updateOne(
    {
          _id:req.params.id
    },
    {
        $set : req.body
    }

  )
  resp.send(result)
})

//Load specifiaction

app.post("/add-load", async (req,resp) =>{
  let load = new Load(req.body);
  let result = await load.save();
  resp.send(result)

})

app.get("/loads",async (req,resp)=>{
  let loads = await Load.find();
  if(loads.length>0){
    resp.send(loads)
  }else{
    resp.send({result :"No products found"})
  }
})

app.delete("/load/:id",async (req,resp)=>{
 
  const result = await Load.deleteOne({_id:req.params.id})
  resp.send(result);
});

app.get("/load/:id",async (req,resp) =>{
  let result = await Load.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);

  }else{
    resp.send({result : "no record found"})
  }
})

app.put("/load/:id",async (req,resp) =>{
  let result = await Load.updateOne(
    {
          _id:req.params.id
    },
    {
        $set : req.body
    }

  )
  resp.send(result)
})


//pickup specification backend


app.post("/add-pickup", async (req,resp) =>{
  let pickup = new Pickup(req.body);
  let result = await pickup.save();
  resp.send(result)

})

app.get("/pickups",async (req,resp)=>{
  let pickups = await Pickup.find();
  if(pickups.length>0){
    resp.send(pickups)
  }else{
    resp.send({result :"No products found"})
  }
})

app.delete("/pickup/:id",async (req,resp)=>{
 
  const result = await Pickup.deleteOne({_id:req.params.id})
  resp.send(result);
});

app.get("/pickup/:id",async (req,resp) =>{
  let result = await Pickup.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);

  }else{
    resp.send({result : "no record found"})
  }
})

app.put("/pickup/:id",async (req,resp) =>{
  let result = await Pickup.updateOne(
    {
          _id:req.params.id
    },
    {
        $set : req.body
    }

  )
  resp.send(result)
})

// deport point backend

app.post("/add-deportpoint", async (req,resp) =>{
  let deportpoint = new Deportpoint(req.body);
  let result = await deportpoint.save();
  resp.send(result)

})

app.get("/deportpoints",async (req,resp)=>{
  let deportpoints = await Deportpoint.find();
  if(deportpoints.length>0){
    resp.send(deportpoints)
  }else{
    resp.send({result :"No products found"})
  }
})

app.delete("/deportpoint/:id",async (req,resp)=>{
 
  const result = await Deportpoint.deleteOne({_id:req.params.id})
  resp.send(result);
});

app.get("/deportpoint/:id",async (req,resp) =>{
  let result = await Deportpoint.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);

  }else{
    resp.send({result : "no record found"})
  }
})

app.put("/deportpoint/:id",async (req,resp) =>{
  let result = await Deportpoint.updateOne(
    {
          _id:req.params.id
    },
    {
        $set : req.body
    }

  )
  resp.send(result)
})


// transshipmentpoint backend

app.post("/add-transshipmentpoint", async (req,resp) =>{
  let transshipmentpoint = new Transshipmentpoint(req.body);
  let result = await transshipmentpoint.save();
  resp.send(result)

})

app.get("/transshipmentpoints",async (req,resp)=>{
  let transshipmentpoints = await Transshipmentpoint.find();
  if(transshipmentpoints.length>0){
    resp.send(transshipmentpoints)
  }else{
    resp.send({result :"No products found"})
  }
})

app.delete("/transshipmentpoint/:id",async (req,resp)=>{
 
  const result = await Transshipmentpoint.deleteOne({_id:req.params.id})
  resp.send(result);
});

app.get("/transshipmentpoint/:id",async (req,resp) =>{
  let result = await Transshipmentpoint.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);

  }else{
    resp.send({result : "no record found"})
  }
})

app.put("/transshipmentpoint/:id",async (req,resp) =>{
  let result = await Transshipmentpoint.updateOne(
    {
          _id:req.params.id
    },
    {
        $set : req.body
    }

  )
  resp.send(result)
})

// nodepoint backend

app.post("/add-nodepoint", async (req,resp) =>{
  let nodepoint = new Nodepoint(req.body);
  let result = await nodepoint.save();
  resp.send(result)

})

app.get("/nodepoints",async (req,resp)=>{
  let nodepoints = await Nodepoint.find();
  if(nodepoints.length>0){
    resp.send(nodepoints)
  }else{
    resp.send({result :"No products found"})
  }
})

app.delete("/nodepoint/:id",async (req,resp)=>{
 
  const result = await Nodepoint.deleteOne({_id:req.params.id})
  resp.send(result);
});

app.get("/nodepoint/:id",async (req,resp) =>{
  let result = await Nodepoint.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);

  }else{
    resp.send({result : "no record found"})
  }
})

app.put("/nodepoint/:id",async (req,resp) =>{
  let result = await Nodepoint.updateOne(
    {
          _id:req.params.id
    },
    {
        $set : req.body
    }

  )
  resp.send(result)
})

// reliefpoint backend

app.post("/add-reliefpoint", async (req,resp) =>{
  let reliefpoint = new Reliefpoint(req.body);
  let result = await reliefpoint.save();
  resp.send(result)

})

app.get("/reliefpoints",async (req,resp)=>{
  let reliefpoints = await Reliefpoint.find();
  if(reliefpoints.length>0){
    resp.send(reliefpoints)
  }else{
    resp.send({result :"No products found"})
  }
})

app.delete("/reliefpoint/:id",async (req,resp)=>{
 
  const result = await Reliefpoint.deleteOne({_id:req.params.id})
  resp.send(result);
});

app.get("/reliefpoint/:id",async (req,resp) =>{
  let result = await Reliefpoint.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);

  }else{
    resp.send({result : "no record found"})
  }
})

app.put("/reliefpoint/:id",async (req,resp) =>{
  let result = await Reliefpoint.updateOne(
    {
          _id:req.params.id
    },
    {
        $set : req.body
    }

  )
  resp.send(result)
})

// warehousepoint backend

app.post("/add-warehousepoint", async (req,resp) =>{
  let warehousepoint = new Warehousepoint(req.body);
  let result = await warehousepoint.save();
  resp.send(result)

})

app.get("/warehousepoints",async (req,resp)=>{
  let warehousepoints = await Warehousepoint.find();
  if(warehousepoints.length>0){
    resp.send(warehousepoints)
  }else{
    resp.send({result :"No products found"})
  }
})

app.delete("/warehousepoint/:id",async (req,resp)=>{
 
  const result = await Warehousepoint.deleteOne({_id:req.params.id})
  resp.send(result);
});

app.get("/warehousepoint/:id",async (req,resp) =>{
  let result = await Warehousepoint.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);

  }else{
    resp.send({result : "no record found"})
  }
})

app.put("/warehousepoint/:id",async (req,resp) =>{
  let result = await Warehousepoint.updateOne(
    {
          _id:req.params.id
    },
    {
        $set : req.body
    }

  )
  resp.send(result)
})



/// vehicleload connection bakend;
app.post("/add-vehicleload", async (req,resp) =>{
  let vehicleload = new Vehicleload(req.body);
  let result = await vehicleload.save();
  resp.send(result)

})

app.get("/vehicleloads",async (req,resp)=>{
  let vehicleloads = await Vehicleload.find();
  if(vehicleloads.length>0){
    resp.send(vehicleloads)
  }else{
    resp.send({result :"No products found"})
  }
})

app.delete("/vehicleload/:id",async (req,resp)=>{
 
  const result = await Vehicleload.deleteOne({_id:req.params.id})
  resp.send(result);
});

app.get("/vehicleload/:id",async (req,resp) =>{
  let result = await Vehicleload.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);

  }else{
    resp.send({result : "no record found"})
  }
})

app.put("/vehicleload/:id",async (req,resp) =>{
  let result = await Vehicleload.updateOne(
    {
          _id:req.params.id
    },
    {
        $set : req.body
    }

  )
  resp.send(result)
})
app.listen(5000);