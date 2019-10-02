const User = require('./../models/User');

module.exports = {
    async store(req, res) {
        const user = {  
            nome: req.body.nome,  
            email: req.body.email,
            idade: req.body.idade  
        };

        let usuario = await User.findOne({ email: user.email });

        if(!usuario) {
            usuario = await User.create(user);
            return res.json(usuario);
        } 
        
        return res.json({ "message": "Usuário já cadastrado com esse email!"});
    },

    async index(req, res) {
        let usuarios = await User.find();
        
        return res.json(usuarios);
    },

    async show(req, res) {
        let usuarios = await User.findById(req.params.id, (err, user) => {
            if(err) {
                return res.json({ "message": "Usuário não encontrado!" })
            }

            return res.json(user);
        });
    }
}