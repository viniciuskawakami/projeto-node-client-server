module.exports = {
    user: (app, req, res) => {
        req.assert('_name', 'O nome é obrigatorio').notEmpty();
        req.assert('_name', 'O nome deve conter pelo menos 3 caracteres').isLength({
            min: 3
        });
        req.assert('_email', 'O e-mail é obrigatório').notEmpty();
        req.assert('_email', 'O e-mail é inválido').isEmail();
        req.assert('_password', 'A senha obrigatória').notEmpty();
        req.assert('_password', 'A senha deve possuir no mínimo 5 caracteres').isLength({
            min: 5
        });

        let errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(errors, req, res);
            return false;
        } else {
            return true;
        }
    }
};