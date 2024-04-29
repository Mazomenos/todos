import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUserbyId = async (req, res) => {
    res.send('getUserbyId')
}

export const postUser = async (req, res) => {
    res.send('postUser')
}

export const updateUser = async (req, res) => {
    res.send('updateUser')
}

export const delUser = async (req, res) => {
    res.send('delUser')
}

