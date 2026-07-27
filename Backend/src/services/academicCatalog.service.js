import { academicCatalogQuery } from "../db/academicCatalog.query.js"
export async function academicCatalogService(){
    const result = await academicCatalogQuery()
    return result
}