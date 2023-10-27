import mongoose from "mongoose";

const hospitalHours = new mongoose.Schema(
    {

    }
)

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        },
        qualifications: {
            type: String,
            required: true,
        },
        experienceInYears: {
            type: Number,
            required: true,
            default: 0,
        },
        workInHospitals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital',
            },
        ],
        hours: {
            type: hospitalHours
        }
    },
    { timestamps: true }
)

export const DoctorSchema = mongoose.model('DoctorSchema', doctorSchema)