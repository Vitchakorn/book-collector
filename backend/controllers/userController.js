const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//@desc Register 
//@route Post /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
    const { username, email, password } = req.body;
    if ( !username || !email || !password ){
        res.status(400);
        throw new Error("All field are mandatory");
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registration")
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    if(user) {
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400);
        throw new Error("User data is invalid");
    }
    console.log(`User ${user} created`);

    res.json({message: "Register the user"});
});

//@desc Login user
//@route Post /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        restatus(400);
        throw new Error("All fields are mandatiry!");
    }
    const user = await User.findOne({ email });

    //compare password with hashedpassword
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
        );
        return res.json({accessToken});
    }else {
        res.status(401);
        throw new Error("email or password is invalid");
    }

});

//@desc Current user info
//@route Post /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) => {
    res.json(req.user.id);
});

module.exports = {registerUser, loginUser, currentUser};