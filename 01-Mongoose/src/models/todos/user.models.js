import mongoose from "mongoose";


//Perfectly Alright
// const userSchema = new mongoose.Schema(
//     {
//         name: String,
//         email: String,
//         isActive: Boolean,
//     }
// )

// With SuperPower

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            // required: true, //  Good
            required: [true, 'Password is required'],

        }
    },
    {
        timestamps: true
    }
)


// Model required two - what do you want from the mongoose and bases of it
export const User = mongoose.model("User", userSchema)

// "User" -> It will show in Mongo DB 'plural' and 'lowercase'.