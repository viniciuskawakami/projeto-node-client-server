var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
	url: 'http://localhost:4000'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	/* not require basicAuth for a while. */
	// client.basicAuth('$login', '$password');
	client.get('/api/v1/users', function (err, request, response, obj) {
		assert.ifError(err);

		res.json(obj);
	});
});

/* POST (create) new user. */
router.post('/', function (req, res, next) {
	/* not require basicAuth for a while. */
	// client.basicAuth('$login', '$password');
	client.post('/api/v1/users/', req.body, function (err, request, response, obj) {
		assert.ifError(err);

		res.json(obj);
	});
});

/* GET specific user. */
router.get('/:id', function (req, res, next) {
	/* not require basicAuth for a while. */
	// client.basicAuth('$login', '$password');
	client.get(`/api/v1/users/${req.params.id}`, function (err, request, response, obj) {
		assert.ifError(err);

		res.json(obj);
	});
});

/* PUT (edit) specific user. */
router.put('/:id', function (req, res, next) {
	/* not require basicAuth for a while. */
	// client.basicAuth('$login', '$password');
	client.put(`/api/v1/users/${req.params.id}`, req.body, function (err, request, response, obj) {
		assert.ifError(err);

		res.json(obj);
	});
});

/* DELETE specific user. */
router.delete('/:id', function (req, res, next) {
	/* not require basicAuth for a while. */
	// client.basicAuth('$login', '$password');
	client.del(`/api/v1/users/${req.params.id}`, function (err, request, response, obj) {
		assert.ifError(err);

		res.json(obj);
	});
});
module.exports = router;
