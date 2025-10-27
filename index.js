// Node Js

// console.log("hiii");

// let fs = require("fs")

// fs.writeFileSync("index2.html", "hello index2 file")

// // "utf8 likhte h taaki file k andar ki cheez hexadecimal m na aake string m aaye"
// let text = fs.readFileSync("index2.html","utf8" , (err)=>{
//     if(err){console.log(err)}  
// })
// console.log(text);

// let text = fs.appendFileSync("index.html", "kyuuuuuu")
// console.log(text.toString());

// fs.renameSync("index.html", "hello.html")

// fs.writeFileSync("Style.text", "style")

// fs.unlinkSync("Style.text");

// let res = fs.existsSync("index.js")
// console.log(res);



// Async ways to create

// fs.writeFile("Sigma.text", "sigma file created async", (err)=>{
//     if(err) throw err
//     console.log("file run succfully");
// })

// fs.rename("Sigma.text", "Alpha.text", (err)=>{
//     if(err) throw err
//     console.log("doneee");   
// })

// let r = fs.readFile("hehe.text", (err)=>{
//     if(err) throw err
//     console.log("read");    
// })

// fs.unlink("Alpha.text", (err)=>{
//     if(err) throw err
//     console.log("delete");  
// })



// server

// let http = require('http')

// let server = http.createServer((req, res)=>{
//     res.end("hello from server")
// })

// server.listen(3000, ()=>{
//     console.log("server running on port 3000");
// })

// let os = require('os')
// console.log(os.type());         //type of os (windows)
// console.log(os.platform());     //platform
// console.log(os.freemem());      //memory left
// console.log(os.arch());         //architecture of window
// console.log(os.homedir());      // home basic address (c:\Users\HP)
// console.log(os.hostname());     // host name (shashank)



// Express

// let express = require('express')
// let fs = require('fs')

// let app = express()

// app.get('/', (req, res)=>{
//     res.send("don 1")
// })
// app.get('/home', (req, res)=>{
//     res.send("minister")
// })
// app.get('/new', (req,res)=>{
//     fs.writeFileSync("don.js", "helo DON js")
//     res.send("hii DON boss")
// })

// app.listen(3000, ()=>{
//     console.log("Running on port 3000");
    
// })












// let express = require("express")
// let fs = require("fs")

// let app = express()

// app.get("/", (req,res)=>{
//     res.send("Hello from serverrrrrr")
// })

// app.get("/create", (req,res)=>{
//     fs.writeFileSync("happy.html", "happy happy ji")
// })

// app.get("/read", (req,res)=>{
//     fs.readFileSync("happy.html")
// })

// app.listen(4000, ()=>{
//     console.log("Server running on port no 4000");
    
// })














// task to find array number dynamically

// let express = require('express')
// let app = express()

// let arr = [1,2,3,4,2,6,2,5,24,6,7,8,9,0,11,22,33,44,55,56]

// app.get('/', (req,res)=>{
//     res.send("hello broo")
// })

// app.get("/:a", (req,res)=>{
    
//     let {a} = req.params
//     console.log(a);
    
//     let val = arr.filter((data)=>{
//         return data == a;
//     })
//     // res.send(val)  
// })


// app.listen('4000', ()=>{
//     console.log("running on port 4000 broo");
    
// })















// let express = require('express')
// let app = express()

// let fs = require('fs')

// app.use(express.json())

// app.get("/", (req, res)=>{

//     res.send("hi")
//     console.log(req.body);
    

//     // console.log(req.body);
    
// })

// // app.get("/read", (req,res)=>{

// //     let data = fs.readFile("index1.html")
// //     res.send(data.toString())
// // })

// // app.post("/create", (req,res)=>{
// //     let data = req.body
// //     console.log(data, "ddhhddtthhdd");
    
// // })

// // app.patch("edit", (req,res)=>{
// //     let dataForEdit = req.body
// //     fs.appendFile("index1.html", dataForEdit.msg)
// //     res.send("file was updated")
// // })

// app.listen(5000, ()=>{
//     console.log("server on 5000");
// })









// // practice
// let express = require('express')
// let app = express()

// app.get('/', (req,res)=>{
//     res.end("home page / path in get")
// })
// app.get('/profile', (req,res)=>{
//     res.end("profile page /profile path in get")
// })

// app.listen(5000, ()=>{
//     console.log("runningggg   ookkkkkkk");
    
// })
















// Rupesh sir's code

// let express = require("express")
// let app = express()
// app.use(express.json())
// const User= require('./user')
//    let mongoose=    require("mongoose")
//    mongoose.connect("mongodb://127.0.0.1:27017/online").then(()=>{
//     console.log("db....");
    

//    }).catch((err)=>{
//     console.log(err);
    

//    })
// app.get('/', (req, res) => {
//   res.send("hello")
// })
  
// app.post('/user', async(req,res)=>{
    
//    let {name,email,passWord}= req.body 
//      let userData=    new User({
//         name,
//         email,
//         passWord
//       })
//         await  userData.save()
//         res.send({msg:"user saved  succuessfulyyy"})
          


// })
// app.listen(4000, () => {
//   console.log("server running on port no 4000");

// })












// Practicee of Dynamic Routing

// let express = require('express')
// let app = express()

// app.get('/', (req,res)=>{
//   res.send("Something about / page")
// })

// app.get('/:name/:age', (req,res)=>{

//   // let{name} = req.params
//   // res.send(`Something about /${name} page`)

//   res.send(req.params.name + "'s page" + " who's age is : " + req.params.age)
  
// })


// app.listen(3000,()=>{
//   console.log("running on 3000 Practice");
  
// })















// Databases checking frontend to backend login-signUp


// let express = require("express")
// let bcrypt=  require("bcrypt")
// let jwt=    require('jsonwebtoken')
// let app = express()

// app.use(express.json())
// const User= require('./user')
//    let mongoose=    require("mongoose")
//    mongoose.connect("mongodb://127.0.0.1:27017/NewDb").then(()=>{
//     console.log("db....");
//    }).catch((err)=>{
//     console.log(err);
    
//    })
// app.get('/', (req, res) => {
//   res.send("hello")
// })

// app.post("/signUp",  async(req,res)=>{
       
//        let {name,email,passWord,role}=      req.body
             
//            const existingUser=      await  User.findOne({email})
//            if(existingUser){
//             return res.send({msg:"User already exists"})
//            }
//            else{
//                   let hashedP=     await bcrypt.hash(passWord,10)
//                   console.log(hashedP);
//                  let newUser=     new User({
//                     name:name,
//                     email:email,
//                     passWord:hashedP,
//                     role:role || 'user'
//                   })
//                   await   newUser.save()
//                   res.send({msg:"user registered"} )
                  
//            }

// })
// // rbac

// app.post("/login", async(req,res)=>{
//   let secreateKey="JDNFNHIUWHFIWWIU"
//   let {email,passWord}=req.body
//         // rbac
//            let user=    await User.findOne({email})
//            if(!user){
//             return res.send({msg:"User not found"})
//            }else{
               
//                let isMatch=   await   bcrypt.compare(passWord,user.passWord)
//                if(!isMatch){
//                 return res.send("Invalid credentials")
//                }
                  
//               let token=   jwt.sign({email:user.email,role:user.role},secreateKey)
//               console.log(token,"toeknnn");
              
                   
//                return res.send(token)

//            }
// })


// function authorizeRole(requireRole){

//   return (req,res,next)=>{
     
//      const Token=     req.headers.authorization
//      console.log(Token,"         heheh");
     
//      if(!Token){
//       return res.send({msg:"Access denied"})
//      }
//      else{
        
//       let decode=     jwt.verify(Token,"JDNFNHIUWHFIWWIU")
//       console.log(decode,"code");
      
//       if(decode.role!==requireRole){
//         return res.send("Insufficient permission")

//       }else{
//         next()
//       }


//      }


//   }

// }





// // rbac
// app.get("/home", authorizeRole("admin"),   (req,res)=>{
//   res.send("homeee")

// })





// app.post('/user', async(req,res)=>{
    
//    let {name,email,passWord}= req.body 
//      let userData=    new User({
//         name,
//         email,
//         passWord
//       })
//         await  userData.save()
//         res.send({msg:"user saved  succuessfulyyy"})
          
// })
// app.listen(4000, () => {
//   console.log("server running on port no 4000");

// })













// // otp sending

// const express = require('express');
// const sendOtp = require('./twillioService'); 
// const app = express();
// app.use(express.json());

// app.post('/send-otp', async (req, res) => {
//   const { phoneNumber } = req.body;
//   console.log(phoneNumber,"hewheh");


//   const otp = Math.floor(100000 + Math.random() * 900000);

//   // Set expiration time for the OTP (1 minute from now)
//   const expiresAt = new Date(Date.now() + 1 * 60 * 1000); // 1 minute

//   try {
//     await sendOtp(phoneNumber, otp);

//     // Save OTP and phone number in the database
//     const newOtp = new Otp({
//       phoneNumber,
//       otp,
//       expiresAt:expiresAt.toString(),
//     });
//     await newOtp.save();

//     res.status(200).send({ message: 'OTP sent successfully', otp });
//   } catch (error) {
//     res.status(500).send({ error: 'Failed to send OTP' });
//   }
// });

// app.post('/verify', async (req, res) => {
//   const { otp } = req.body;

//   try {

//     const otpRecord =       await otp.findOne({ otp });

//     if (!otpRecord) {
//       return res.status(400).send({ error: 'Invalid OTP' });
//     }

//     const currentTime = new Date();
//     if (currentTime > otpRecord.expiresAt) {
//       return res.status(400).send({ error: 'OTP has expired' });
//     }


//     res.status(200).send({ message: 'OTP verified successfully' });


//     await otp.deleteOne({ _id: otpRecord._id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Failed to verify OTP' });
//   }
// });



// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });















// const express = require('express');
// const mongoose = require('mongoose');
// const sendOtp = require('./twillioService'); // Twilio service to send OTP
// const Otp = require('./model/otp'); // OTP model
// let cors=require('cors')
// const app = express();
// app.use(cors())
// app.use(express.json());
// const Movie = require('./model/movies');
// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/otp', {
// });

// app.post('/send-otp', async (req, res) => {
//   const { phoneNumber } = req.body;
//   console.log(phoneNumber,"hewheh");
  

//   // Generate a 6-digit OTP
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   // Set expiration time for the OTP (1 minute from now)
//   const expiresAt = new Date(Date.now() + 1 * 60 * 1000); // 1 minute

//   try {
//     // Send OTP via Twilio
//     await sendOtp(phoneNumber, otp);

//     // Save OTP and phone number in the database
//     const newOtp = new Otp({
//       phoneNumber,
//       otp,
//       expiresAt:expiresAt.toString(),
//     });
//     await newOtp.save();

//     res.status(200).send({ message: 'OTP sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Failed to send OTP' });
//   }
// });
// app.post('/verify', async (req, res) => {
//   const { otp } = req.body;

//   try {

//     const otpRecord =       await Otp.findOne({ otp });

//     if (!otpRecord) {
//       return res.status(400).send({ error: 'Invalid OTP' });
//     }

//     const currentTime = new Date();
//     if (currentTime > otpRecord.expiresAt) {
//       return res.status(400).send({ error: 'OTP has expired' });
//     }


//     res.status(200).send({ message: 'OTP verified successfully' });


//     await Otp.deleteOne({ _id: otpRecord._id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Failed to verify OTP' });
//   }
// });





// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });


















//   OTP Verification*********************

// let Express = require("express")
// const sendOtp= require("./twillioService")
// const Otp= require("./Otp")
// const mongoose = require("mongoose");
// let app = Express();
// app.use(Express.json());

// mongoose.connect('mongodb://localhost:27017/otp', {
// });

// app.post("/send-otp",async(req,res)=>{
//     const {phoneNumber}=req.body;

//     const otp=Math.floor(10000 + Math.random()* 900000)

//     const expiresAt= new Date(Date.now() + 2 * 60 * 1000);

//    try {
//     await sendOtp(phoneNumber, otp);

//     const newOtp = new Otp({
//       phoneNumber,
//       otp,
//       expiresAt:expiresAt.toString()
//     })
//     await newOtp.save();
//     res.status(200).send({ message: 'OTP sent successfully', otp });
//   } catch (error) {
//     res.status(500).send({ error: 'Failed to send OTP' });
//   }
// });

// app.post('/verify',async(req,res)=>{
// const {otp}=req.body;

// try{
//   const otpRecord= await Otp.findOne({otp});

//   const currentTime= new Date();
//   if(!otpRecord){
//     return res.status(400).send({error:' OTP not found'});
//   }

//   if(currentTime>otpRecord.expiresAt){
//     return res.status(400).send({error:'OTP expired'});
//   }

//   res.status(200).send({message:'OTP verified successfully'});

//   // await Otp.deleteOne({_id:otpRecord._id});
//   // await otpRecord.save();
// }
// catch(error){
//   console.log(error);
  
//   res.status(500).send({error:'Failed to verify OTP'});
// }
// });

// app.listen(4000,()=>{
//     console.log("running at 4000");
    
// })


















// login signup

let express = require("express")
 let bcrypt=  require("bcrypt")
let app = express()
let jwt= require("jsonwebtoken")
let cors= require("cors")
let forget= require("./forgot")
let reset= require("./reset")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const User= require('./user')
   let mongoose=    require("mongoose")
   mongoose.connect("mongodb://127.0.0.1:27017/NewDb").then(()=>{
    console.log("db....");
   }).catch((err)=>{
    console.log(err);
    
   })

   app.use("/api",forget)
   app.use("/api",reset)
   
app.get('/', (req, res) => {
  res.send("hello")
})

app.post("/signUp",  async(req,res)=>{
    
       let {name,email,passWord,role}=      req.body
             
           const existingUser=      await  User.findOne({email})
           if(existingUser){
            return res.send({msg:"User already exists"})
           }
           else{
                  let hashedP=     await bcrypt.hash(passWord,10)
                  console.log(hashedP);
                 let newUser=     new User({
                    name:name,
                    email:email,
                    passWord:hashedP,
                    role:role || "user"
                  })
                  await   newUser.save()
                  res.send({msg:"user registered"} )
                  

           }

})



  
// app.post('/user', async(req,res)=>{
    
//    let {name,email,passWord}= req.body 
//      let userData=    new User({
//         name,
//         email,
//         passWord
//       })
//         await  userData.save()
//         res.send({msg:"user saved  succuessfulyyy"})
          


// })

app.post('/login', async(req,res)=>{

   let secretKey="dfghjkmnbvfghjkl"
   let {email,passWord}= req.body 
     let userData=    await User.findOne({email})
     if(userData){
        let result=    await bcrypt.compare(passWord,userData.passWord)
        if(!result){
           return res.send({msg:"Invalid credentials"})
        }
        let token= jwt.sign({email:userData.email,role:userData.role},secretKey)
        return res.send(token)
        
     }
        
})

// function authorizeRole(requireRole){
//    return(req,res,next)=>{
//     let Token= req.headers.authorization
    
//     if(!Token){
//       res.send("unauthorized access")
//     }
//     else{
//       let decode= jwt.verify(Token,"dfghjkmnbvfghjkl")
//      if(decode.role != requireRole){
//       return res.send("Insufficient role")
//      }
//      else{
//        next()
//       }
//       }
      
//     }
   
// }
// app.get('/home',authorizeRole("admin"),(req,res)=>{
//    res.send("home")
// })

app.listen(4000, () => {
  console.log("server running on port no 4000");

})