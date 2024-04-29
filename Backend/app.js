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
      lastName: "Melendez"
    }
  })
  console.log(get)
}
*/

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;