const router=require("express").Router();
 const User =require("../models/User");
 const bcrypt =require("bcrypt");
//register
router.post("/register",async (req,res)=>{
    
   
        try{
        //generate new password
           const salt =await bcrypt.genSalt(10);
           const hashedpassword=await bcrypt.hash(req.body.password,salt);

           //create new user
           const NewUser= new User({
            username:req.body.username,
            email: req.body.email,
            password:req.body.password
        });

        //save user and return response
        const user=await NewUser.save();
        console.log(user)
        res.send(user)
        res.send(200).json(user);
    
    }
    
   catch(err){
    res.status(500).json(err)

    }
})
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    // !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
