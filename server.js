const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { User } = require("./models/user");
const { auth } = require("./service/middleware/auth");
const cors = require("cors");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//mongodb 사이트에서 카피한 주소 넣기
const dbAddress =
  "mongodb://146.56.137.48:27017/test";

mongoose
  .connect(dbAddress, {
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world!!!!"));

app.get("/service/hello", (req, res) => {
  res.send("안녕하세요");
});

app.post("/service/users/register", (req, res) => {
  //post로 넘어온 데이터를 받아서 DB에 저장해준다
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post("/service/users/login", (req, res) => {
  //로그인을 할 때 아이디와 비밀번호를 받는다
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user) {
      return res.json({
        loginSuccess: false,
        message: "존재하지 않는 아이디입니다.",
      });
    }
    user
      .comparePassword(req.body.password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 일치하지 않습니다",
          });
        }
        //비밀번호가 일치하면 토큰을 생성한다
        user
          .generateToken()
          .then((user) => {
            console.log('dd')
            res.cookie("x_auth", user.token).status(200).json({
              loginSuccess: true,
              userId: user._id,
            });
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      })
      .catch((err) => res.json({ loginSuccess: false, err }));
  });
});

//auth 미들웨어를 가져온다
app.get("/service/users/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req._id,
    isAdmin: req.user.role === 09 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

//user_id를 찾아서 db에있는 토큰값을 비워준다
app.post("/service/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    res.clearCookie("x_auth");
    return res.status(200).send({
      success: true,
    });
  });
});

const port = 9000;

app.listen(port, () => console.log(`listening on port ${port}`));