const { token } = require('morgan');
const User = require('../models/user.model');

// Usar Async e Await

// Criar novo 'User':
exports.registerNewUser = async (req, res) => {
  try {
    // Verificar se tem algum e-mail já cadastrado:
    $: isUser = await User.find({ email: req.body.email });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res.status(409).json({ message: 'Atenção!  Este e-mail já possui registro na Base de Dados!' });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken(); // Metodo do model
    res.status(201).json({ message: 'Usuário(a) criado(a) com sucesso!', user, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// login 'User':
exports.loginUser = async (req, res) => {
  try {
    console.log("entrou no try")
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findByCredentials(email, password);
    if (!user) {
        console.log("entrou do if")
      return res.status(401).json({ error: 'Erro ao Logar! Verifique as suas credenciais de autenticação!' });
    }
    const token = await user.generateAuthToken();
    console.log("201, deu bom")
    res.status(201).json({ message: 'Usuário(a) logado com sucesso!', user, token });
  } catch (err) {
      console.log("deu ruim", err);
    res.status(400).json({ err: err });
  }
};

// Return 'User'
exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};