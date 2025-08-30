
export const login = async(req,res)=>{
    try {
        res.status(200).json({message:"Api works"});
    } catch (error) {
        res.status(500).json({
            message:"unable to login",
            error:error
        })
    }
}


export const signup = async(req,res)=>{
    try {
        res.status(200).json({message:"Api works"});
        
    } catch (error) {
        res.status(500).json({
            message:"unable to login",
            error:error
        })
    }
}


export const logout = async(req,res)=>{
    try {
        res.status(200).json({message:"Api works"});
        
    } catch (error) {
        res.status(500).json({
            message:"unable to login",
            error:error
        })
    }
}


export const check = async(req,res)=>{
    try {
        res.status(200).json({message:"Api works"});
        
    } catch (error) {
        res.status(500).json({
            message:"unable to login",
            error:error
        })
    }
}


export const profile = async(req,res)=>{
    try {
        res.status(200).json({message:"Api works"});
        
    } catch (error) {
        res.status(500).json({
            message:"unable to login",
            error:error
        })
    }
}