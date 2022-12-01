const express = require("express");     
const client = require("./db")  
const app = express();
var moment = require('moment');

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
  res.set("Content-Type", "text/html");
  next();
});
let respuesta = [];

app.post("/", async (req, res) => {
  try {
    await client.connect()
    let { option, fechaI,FechaF, rows, numero, bodyRequest, Id } = req.body;
    switch (option) {
      case "prueba":
        try {
          respuesta = await client.query('SELECT * FROM public.monitore_variables_electricas')
            console.log(respuesta,"que esta pasando")
         if(respuesta.rows.length > 0 ) {
          await client.end()
          res.json(respuesta.rows).end()
  
         } else {
          await client.end()
          res.send("no se encuentra nigun registro").end()
         }
        } catch (error) {
          console.log(error)
        }
       
        break;
        case "eliminacion":
          try {
            respuesta = await client.query(`DELETE FROM monitore_variables_electricas WHERE id = ${Id}`)
            // console.log(respuesta,"que esta pasando")
         if(respuesta.rowCount > 0 ) {
          await client.end()
          res.json(respuesta.rowCount).end()
         } else {
          await client.end()
          res.send("no se borro ningun registro").end()
         }
          } catch (error) {
            console.log(error)
          }
        break;
        case "insertar":
          try {
            if (rows.length > 0) {
              for (let i = 0; i < rows.length; i++) {
                let id = Math.floor(Math.random() * 999999)
                respuesta = await client.query(`INSERT INTO monitore_variables_electricas
                VALUES (${id},'${rows[i].meter_date}','${rows[i].value}')`)
              }  
              await client.end()
              res.json("esxito").end()
    
            } else {
              await client.end()
              res.send("la peticion esta mal estruturada deve insertar al menos un caracter").end()
            }
          } catch (error) {
            console.log(error)
          }
           break;
           case 'busquedatiempo':
            try {
              respuesta = await client.query(`SELECT * FROM public.monitore_variables_electricas WHERE lastinsert BETWEEN '${fechaI}' AND '${FechaF}';`)
             res.json(respuesta.rows).end()
             await client.end()
            } catch (error) {
              console.log(error)
            }
         break
        case 'daily':
          try {
            respuesta = await client.query(`SELECT SUM(variables) ,date_trunc('hour', timeline)  AS horasAgrupadas  
            FROM public.monitore_variables_electricas WHERE timeline BETWEEN '${fechaI} 00:00:00' AND '${fechaI} 23:00:00'
            GROUP BY horasAgrupadas ORDER by horasAgrupadas;`)
           if(respuesta.rows) {
             res.json(respuesta.rows).end()
             await client.end()
           } else {
             res.send("no se encuentra nigun registro").end()
             await client.end()
           }
          } catch (error) {
            console.log(error)
          }
       break;
       case 'weekly':
          try {
            respuesta = await client.query(`SELECT SUM(variables) ,date_trunc('week', timeline)  AS horasAgrupadas  
            FROM public.monitore_variables_electricas WHERE timeline BETWEEN '2022-10-24 00:00:00' AND '2022-10-24 23:00:00'
            GROUP BY horasAgrupadas ORDER by horasAgrupadas;`)
           if(respuesta.rows) {
             res.json(respuesta.rows).end()
             await client.end()
           } else {
             res.send("no se encuentra nigun registro").end()
             await client.end()
           }
          } catch (error) {
            console.log(error)
          }
       break;
       case 'monthly':
        try {
          respuesta = await client.query(`SELECT SUM(variables) ,date_trunc('hour', timeline)  AS horasAgrupadas  
          FROM public.monitore_variables_electricas WHERE timeline BETWEEN '2022-${fechaI}-01 00:00:00' AND '2022-${fechaI}-29 23:00:00'
          GROUP BY horasAgrupadas ORDER by horasAgrupadas;`)
         if(respuesta.rows) {
           res.json(respuesta.rows).end()
           await client.end()
         } else {
           res.send("no se encuentra nigun registro").end()
           await client.end()
         }
        } catch (error) {
          console.log(error)
        }
     break;
    default:
        console.log("No es valida la peticion");
        break;
    }
  } catch (error) {
    console.log(error)
  }
 
});

module.exports = app;