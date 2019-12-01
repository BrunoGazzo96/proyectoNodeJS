const express = require("express");
const router = express.Router();
const con = require('../bd/database-connection').con;


router.get('/personas/mostrar',(req,res)=>{
    con.query('SELECT * FROM personas',(err,result,fields)=>{
        if(err)res.status(500).send(err);
        res.status(200).send(result);
    })
});

router.get('/mascotas/mostrar',(req,res)=>{
    con.query('SELECT * FROM mascota',(err,result,fields)=>{
        if(err)res.status(500).send(err);
        res.status(200).send(result);
    })
});

router.get('/servicios/mostrar',(req,res)=>{
    con.query('SELECT * FROM servicios',(err,result,fields)=>{
        if(err)res.status(500).send(err);
        res.status(200).send(result);
    })
});

router.get('/',(req,res)=>{
    req.sendFile(path.join(__dirname,'/Frontend/index.html'));
});

router.post('/persona/agregar',(req,res)=>{
    con.query("INSERT INTO personas(nombre_persona,direccion_persona,telefono_persona,email_persona) VALUES (?,?,?,?)",
    [req.body.nombre,req.body.direccion,req.body.telefono,req.body.email],(err,result,fields)=>{
        if(err)res.status(500).send(err);
        const response = JSON.stringify(result);
        res.status(200).send(JSON.parse(response));
    });
});

router.post('/buscar/persona',(req,res)=>{
    con.query('SELECT * FROM personas INNER JOIN mascota ON (fk_persona=id_persona) INNER JOIN servicios ON (id_mascota=fk_mascota) WHERE nombre_persona LIKE ?',
    [req.body.nombre],
    (err,result,fields)=>{
        if(err)res.status(500).send(err);
        res.status(200).send(result);
    });
});

router.post('/buscar/mascota',(req,res)=>{
    con.query('SELECT * FROM personas INNER JOIN mascota ON (fk_persona=id_persona) INNER JOIN servicios ON (id_mascota=fk_mascota) WHERE nombre_mascota LIKE ?',
    [req.body.nombre],
    (err,result,fields)=>{
        if(err)res.status(500).send(err);
        res.status(200).send(result);
    });
});

router.post('/mascota/agregar',(req,res)=>{
    con.query('INSERT INTO mascota(fk_persona,nombre_mascota,raza_mascota,fecha_nacimiento_mascota,genero_mascota) VALUES (?,?,?,?,?)',
    [req.body.persona,req.body.nombre,req.body.raza,req.body.fecha,req.body.genero],(err,result,fields)=>{
        if(err)res.status(500).send(err);
        res.status(200).send(result);
    });
});

router.post('/servicio/agregar',(req,res)=>{
    con.query('INSERT INTO servicios(fk_mascota,descripcion_servicio,fecha_servicio,costo_servicio) VALUES (?,?,?,?)',
    [req.body.mascota,req.body.descripcion,req.body.fecha,req.body.costo],(err,result,fields)=>{
        if(err)res.status(500).send(err);
        res.status(200).send(result);
    });
});

exports.router = router;