const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const mensaje = req.query.mensaje || '';
    const now = new Date();
  
    res.send(`
      <h1> Bienvenido </h1>
      <p> Hora actual: ${now.getHours()}:${now.getMinutes()} </p>
  
      ${mensaje ? `<p style="color:red">${mensaje}</p>` : ''}
  
      <a href="/endroute">Entrar</a>
    `);
  });

module.exports = router;