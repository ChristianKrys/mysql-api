
const connection = require('../config/databaseConnect')
const { IUser } = require('../models/modelUser')
const imageFolder = '../../public/images/';

const addUser = async (req,res)=>{
    try {

        const user = {...IUser};
        user.nom = req.body.nom;
        user.age = req.body.age;

        q = `INSERT INTO tab (id, nom, age) 
            VALUES (NULL, ${user.nom}, ${user.age})`;

        connection.query(q, (err, result, fields) => {
            if (err) {
                throw new Error(err);
            } else {
                console.log("User Enregistrée avec succès !");
                res.status(200).json(result);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getAllUser = async (req,res)=>{
    try {

        q = `SELECT * FROM tab`;

        connection.query(q, (err, result, fields) => {
            if (err) {
                throw new Error(err);
            } else {
                res.status(200).json(result);
            }
        });       
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


const getUserById = async (req,res)=>{
    try {
        let id = req.params.id;
        
        q = `SELECT * FROM tab WHERE id = ${id}`;

        connection.query(q, (err, result, fields) => {
            if (err) {
                throw new Error(err);
            } else {
                res.status(200).json(result);
            }
        });       
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



const updateUser = async (req,res)=>{
    try {
        let id = req.params.id;

        const user = {...IUser, ...req.body};
        // user.nom = req.body.nom;
        // user.age = req.body.age;

        q = `UPDATE tab SET nom = ${user.nom}, age = ${user.age} WHERE id = ${id}`;

        connection.query(q, (err, result, fields) => {
            if (err) {
                throw new Error(err);
            } else {
                console.log("User Modifié avec succès !");
                res.status(200).json(result);
            }
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteUser = async (req, res) => {
    let id = req.params.id;
    try {
        q = `DELETE FROM tab WHERE id = ${id}`;

        connection.query(q, (err, result, fields) => {
            if (err) {
                throw new Error(err);
            } else {
                res.status(200).json(result);
            }
        }); 

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}



module.exports = {addUser,getAllUser,getUserById,updateUser,deleteUser};










// const getDataFromUserGps = function(callback)
// {
//     connection.query("SELECT * FROM tab", 
//         function(err, results, fields) {
//             if (err) return callback(err, null);
//             return callback(null, results);
//         }
//     ); 
// }


