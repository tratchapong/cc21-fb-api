import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient()

// prisma.$queryRaw`SHOW TABLES`.then( rs => console.log(rs) )

export default prisma