const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {Schema} = mongoose;

const userSchema = new Schema({
  name: { type: String, maxlength: 50, required: true },
  email: { type: String, maxlength: 30, required: true },
  password: { type: String, required: true },
  tokens: [
    { 
      token: { type: String, required: true }
    }
  ]
}, {
  timestamps: true,
  collection: 'users',
});

// Fazer o 'hash' da senha e salvar 'User'
userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });

// Criando autenticação auth para o 'User'
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, "secret");
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// Pesquisa 'user' por 'email' e 'password'
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error({ error: 'Invalid Login details.' });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login details." });
  }

  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;