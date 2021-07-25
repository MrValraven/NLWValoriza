
/* 

GET => Buscar uma informação
POST => Inserir (criar) uma informação
PUT => Alterar uma informação
DELETE => Remover um dado
PATCH => alterar uma informação especifica

*/


/* 

Tipos de Parametros
- Routes Params => https://localhost:3000/produtos/9473843
- Query Params => https://localhost:3000/produtos?name=teclado&description=teclado_bom

- Body Params => {
    "name": "teclado",
    "description": teclado bom
}

*/

import express from 'express';
import 'reflect-metadata'
import { router } from "./routes"

import "./database"

const app = express();

app.use(express.json());

app.use(router);


app.listen(3000, () => {
    console.log("hehe");
});