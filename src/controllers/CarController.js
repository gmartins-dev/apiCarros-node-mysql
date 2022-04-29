const CarService = require('../services/CarService');

module.exports = {
    
    searchAll: async (req, res) => {
        let json = {error:'', result:[]};

        let cars = await CarService.searchAll();

        for(let i in cars){
            json.result.push({
                carsCode: cars[i].carsCode,
                carsModel: cars[i].carsModel
            });
        }

        res.json(json);
    },

    searchCar: async (req, res) => {
        let json = {error:'', result:{}};

        let carsCode = req.params.carCode; //para pegar o parametro
        console.log(carsCode)
        let car = await CarService.searchCar(carsCode);

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


