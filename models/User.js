const mongoose = require('mongoose');
// 토큰은 로그인 된 유저를 인증할 때 사용합니다. 이 유저가 서버에 어떠한 요청을 보낼 때 올바른 유저의 요청인지 판단 할 수있게 해줍니다. 
// 유효기간은 그 토큰이 아직 유효한지 그 기간에 대한 정보입니다 !!! 
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minLength: 5,
  },
  lastname: {
    type: String,
    maxLength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };