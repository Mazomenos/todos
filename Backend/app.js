import { PrismaClient } from '@prisma/client'
import express from 'express'
import router from './routes/index.js'
const prisma = new PrismaClient()

const app = express()
const port = 3001

/*
async function main() {
  const get = await prisma.users.create({
    data: {
      name: "Carlos",
      lastName: "Melendez",
      userName: "Elcante"
    }
  })
  console.log(get)
}

main()


async function hola() {
  const get = await prisma.Users.findFirst()
  console.log(get)
  console.log("hola")
}

hola()
*/

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;