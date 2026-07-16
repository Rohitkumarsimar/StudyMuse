import { PrismaClient } from "@prisma/client";
import {readFile} from "node:fs/promises"
import { seedCatalog } from "./catalogSeeder.js";

const prisma = new PrismaClient()

async function main(){
    try{

        const data = await readFile("prisma/data/cbse.json","utf-8")
        const catalog = JSON.parse(data)

        seedCatalog(prisma,catalog)
        console.log(catalog)
    }catch(err){
        console.log("Seeding Failed!" ,err)
}finally{
    await prisma.$disconnect()
}
}

main()