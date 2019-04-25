/*jshint esversion: 6 */
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({
	extended: false,
	limit: '50mb'
}));
app.use(bodyParser.json({
	limit: '50mb'
}));
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

app.listen(4000, function () {
	let dt = new Date();
	let options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		timeZone: 'America/Sao_Paulo',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	};
	let xXx = dt.toLocaleDateString('pt-BR', options);
	console.log('['+xXx+'] Servidor iniciado e escutando no endereço:porta => http://127.0.0.1:4000');
});
