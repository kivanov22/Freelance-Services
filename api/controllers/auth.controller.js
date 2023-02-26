import User from "../models/user.model.js"

export const register = async(req,res)=>{
    
    try {
        const newUser = new User({
            username:"test",
            email:"test@gmail.com",
            password:"test",
            country:"test"
        })

        await newUser.save();
        res.status(200).send("User has been created!")
    } catch (err) {
        res.status(500).send("Something went wrong!")
    }
}

export const login = async (req,res)=>{

}

export const logout = async(req,res)=>{

}