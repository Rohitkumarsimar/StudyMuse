
export function asyncWrap(controller){
    return (req, res, next) =>{
        try{
            const result = controller(req, res, next)
            result.catch((err)=>{
                next(err)
            })
        }catch(err){
            next(err)
        }
    }
}