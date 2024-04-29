import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllHistory = async (req, res) => {
    res.send('getAllHistory')

}

export const getHistorybyUser = async (req, res) => {
    res.send('getHistorybyUser')

}

export const postHistory = async (req, res) => {
    res.send('postHistory')

}

export const delHistory = async (req, res) => {
    res.send('delHistory')

}