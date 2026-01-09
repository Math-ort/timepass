/* crear Express ok
usar middlewaresok 
usar rutasok
escuchar el puerto ok */

const express = require('express');
const app = express();

const horaMiddleware = require('./middlewares/hoursMiddleware');
const validarHora = require('./middlewares/validarHora');

const indexRoutes = require('./routes/index');
const endrouteRoutes = require('./routes/endroute');

app.use(horaMiddleware);;
app.use('/', indexRoutes);
app.use('/endroute', validarHora, endRouter);

app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000');

});

