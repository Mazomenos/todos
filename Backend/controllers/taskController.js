import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllTask = async (req, res) => {
    res.send('getTasks')
}

export const getTaskbyId = async (req, res) => {
    res.send('getTaskbyId')
}

export const getAllTaskbyUser = async (req, res) => {
    res.send('getAllTaskbyUser')
}

export const getAllTaskbyUserState = async (req, res) => {
    res.send('getAllTaskbyUserState')
}

export const postTask = async (req, res) => {
    res.send('postTask')
}

export const updateTask = async (req, res) => {
    res.send('updateTask')
}

export const delTask = async (req, res) => {
    res.send('delTask')
}