require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const { routeUser } = require('./routes/routeUser');



app.use(cors()); //------ autorise toutes les provenances --------
app.use(express.urlencoded({extended : true}));
app.use(express.json({limit : '10mb'}));


const prefix_API = '/mysql-api/v1';

app.use(prefix_API,routeUser);



app.get('/',(req,res)=>{
    res.send('Hello World');
});
  



app.listen(port,()=>{
    console.log(`Serveur en ecoute au port ${port}`);
});




// q = "INSERT INTO `tab` (`id`, `nom`, `age`) VALUES (NULL, 'tonton', '18'), (NULL, 'amidou', '25')";
// pool.query(q,(err,result,fields)=>{
//     if(err){
//         return console.log(err);
//     }else{
//         return console.log(result);
//     }
// });

// q2 = "CREATE TABLE `table3` (`id` INT NOT NULL AUTO_INCREMENT , `classe` INT , `num_salle` INT , PRIMARY KEY (`id`)) ENGINE = MyISAM";
// pool.query(q2,()=>{});


// pool.query(`select * from tab`,(err,result,fields)=>{
//     if(err){
//         return console.log(err);
//     }else{
//         return console.log(result);
//     }
// });


// pool.query(`select * from tab where id = ?`,[2],(err,result,fields)=>{
//     if(err){
//         return console.log(err);
//     }else{
//         return console.log(result);
//     }
// });





