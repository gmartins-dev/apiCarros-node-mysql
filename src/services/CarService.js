const db = require('../db');

module.exports = {
    searchAll: () => {
        return new Promise((accepted, rejected)=>{

            db.query('SELECT * FROM cars', (error, results)=>{
                if(error) { rejected(error); return; }
                accepted(results);
            });
        });
    },

    searchCar: (carsCode) => {
        return new Promise((accepted, rejected)=>{

            db.query('SELECT * FROM cars WHERE carsCode = ?', [carsCode], (error, results) => {
                if(error) { rejected(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    accepted(results[0]);
                }else {
                    accepted(false);
                }
            });
        });
    },
    insert: (carsModel, carsPlate)=> {
        return new Promise((accepted, rejected)=> {

            db.query('INSERT INTO cars (carsModel, carsPlate) VALUES (?, ?)',
                [carsModel, carsPlate],
                (error, results)=>{
                    if(error){ rejected(error); return; }
                    accepted(results.insertcarsCode); //insertId
                }
            );
        });
    },
    update:(carsCode, carsModel, carsPlate)=> {
        return new Promise((accepted, rejected)=> {
            db.query('UPDATE cars SET carsModel = ?, carsPlate = ? WHERE carsCode = ?',
                [carsModel, carsPlate, carsCode],
                (error, results) => {
                    if(error){ rejected(error); return; }
                    accepted(results);
                }
            );
        });
    },

    delete: (carsCode)=> {
        return new Promise((accepted, rejected)=> {
            db.query('DELETE FROM cars WHERE carsCode = ?',[carsCode], (error, results ) =>{
                if(error){ rejected(error); return; }
                accepted(results);
            });
        });
    }
};


