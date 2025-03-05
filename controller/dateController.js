import { request, response } from "express";
import Date from "../models/Date.js";

export const createNewDate = async (req = request, res = response) => {
    const date = new Date(req.body);
    date.subject = "Daniela"
    try {
        await date.save()
        return res.json(date)
    } catch (error) {
        console.log(error)
    }
}

export const getAnswers = async (req = request, res = response) => {
    const date = await Date.where({ subject: "Daniela" })
    return res.json(date);
}