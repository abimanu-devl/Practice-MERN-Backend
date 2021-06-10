const Vehicle = require('../models/vehicle');
const Category = require('../models/categories');

const addVehicle = async (req, res) => {
    if (req.body) {
        const vehicle = new Vehicle(req.body);
        await vehicle.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getVehicles = async (req, res) => {
    await Vehicle.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}
// const getVehiclesForCategory = async(req,res) =>{
//     if (req.params && req.params.id) {
//         await Vehicle.findById(req.params.id)
//         .populate('categories', 'type')
//         .then(data => {
//           res.status(200).send({ categories: data.categories });
//           //console.log(data);
//         })
//         .catch(error => {
//           res.status(500).send({ error: error.message });
//         });
//     }
// }

module.exports = { addVehicle,getVehicles };
