const Category = require('../models/categories');
const Vehicle = require('../models/vehicle');

const addCategory = async (req, res) => {
  if (req.body) {
    const category = new Category(req.body);
    await category.save()
      .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }
}

const getCategories = async (req, res) => {
  await Category.find({})
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
}

const getCategoryById = async(req,res) =>{
  if(req.params && req.params.id){
    await Category.findById(req.params.id)
    .then(data =>{
      res.status(200).send({data:data})
    }).catch(error =>{
      res.status(404).send({error:error.message});
    })
  }

}

const getVehiclesForCategory = async (req, res) => {
  if (req.params && req.params.id) {
    await Category.findById(req.params.id)
      .populate('vehicles', 'code model type name')
      .then(data => {
        res.status(200).send({ vehicles: data.vehicles });
        console.log(data);
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }
}

const calculateAmount = async (req, res) => {
  if (req.params && req.params.id) {
    const category = await Category.findById(req.params.id)
    let totalCharge = 0;
    totalCharge += category.kilometers * category.chargePerKm;
    console.log(totalCharge);

    res.status(200).send({ totalCharge: totalCharge });
  }
  
}

module.exports = { addCategory, getCategories, getVehiclesForCategory,calculateAmount,getCategoryById };