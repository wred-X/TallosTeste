const express = require('express');

const router = express.Router();

router.get('/api/v1', (req,res) => {
    res.status(200).send({
        sucess:true,
        message:'Seja bem vindo',
        version: '1.0.0',
    });
});

module.exports = router;