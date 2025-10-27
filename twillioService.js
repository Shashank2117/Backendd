// twilioService.js
const twilio= require("twilio")

const accountSid= 'AC665e4513e4dbc7b4b05c33ecaf432a81'
const authToken='83009eb340bcd61d0bd1edcbf2ee4e4f'

const client= new twilio(accountSid,authToken);

const sendOtp =(phoneNumber,otp)=>{
    return client.messages.create({
        body: `Your OTP is  ${otp}`,
        from: '+18576667204',
        to: `+91${phoneNumber}`
    });
}

module.exports=sendOtp