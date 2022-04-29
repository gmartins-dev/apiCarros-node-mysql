const CarService = require('../services/CarService');

module.exports = {
    
    selectAll: async (req, res) => {
        let json = {error:'', result:[]};

        let cars = await CarService.selectAll();

        for(let i in cars){
            json.result.push({
                carsCode: cars[i].carsCode,
                carsModel: cars[i].carsModel
            });
        }

        res.json(json);
    },

    selectCar: async (req, res) => {
        let json = {error:'', result:{}};

        let carsCode = req.params.carCode; //para codigo de um carro(objeto) especifico

        let car = await CarService.selectCar(carsCode);

        if(car){
            json.result = car; 
        }

        res.json(json);
    },

    insert: async(req, res) => {
        let json = {error:'', result:{}};

        let carsModel = req.body.carsModel;
        let carsPlate = req.body.carsPlate;

        if (carsModel && carsPlate){
            let CarCode = await CarService.insert(carsModel, carsPlate);
            json.result = {
                carsCode: CarCode,
                carsModel,
                carsPlate
            };
        }else{
            json.error = 'Error: fields not sent';
        }
        res.json(json);
    },

    update: async(req, res) => {
        let json = {error:'', result:{}};

        let carsCode = req.params.carsCode;
        let carsModel = req.body.carsModel;
        let carsPlate = req.body.carsPlate;

        if (carsCode && carsModel && carsPlate){
            await CarService.update(carsCode, carsModel, carsPlate);
            json.result = {
                carsCode,
                carsModel,
                carsPlate
            };
        }else{
            json.error = 'Error: fields not sent';
        }
        res.json(json);
    },
    delete: async(req, res) => {
        let json = {error:'', result:{}};

        await CarService.delete(req.params.carsCode);
        
        res.json(json);
    },
}


