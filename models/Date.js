import { model, Schema } from "mongoose"

const dateSchema = new Schema({
    subject: String,
    option: String,
    appointmentDate: String,
    comment: String
}, { timestamps: true })

const Date = new model("Date", dateSchema)
export default Date;