import axios from 'axios'


const rootUrl = process.env.NODE_ENV === "production"
? "/api/v1"
: "http://localhost:8000/api/v1"
const userUrl= rootUrl + "/user"
const transUrl = rootUrl + "/transaction"


const getUserIdFromStorage = () => {
    const user = sessionStorage.getItem("user")
    console.log(user)
    if(user){
        const userObj = JSON.parse(user)
        console.log(userObj._id);
        return userObj?._id;
    }
    return;
}

// send data to add to db 
 export const postUser = (formData) => {
    try {
         return axios.post(userUrl, formData )
        
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }
        
    }
}
// fetch all data from the server 

export const loginUser = (formData) => {
    try {
         return axios.post(userUrl + "/login", formData)
        
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }
        
    }
}

// transactiion seciotn
// send data to add to transaction db 
export const postTrans =  async(transData) => { 
    try {
        const userId = getUserIdFromStorage();
        // console.log(userId, "lkjhg");
        if(!userId){
            return {
                status: "error",
                message: "you must be logged in "
                
            }
        }
        const {data} = await axios.post(transUrl, transData
            ,{
                headers:{
                    Authorization: userId
                }
             }
        )
        return data;
        
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }

        
    }

}

// GET THE USER SPECIFIC TRANSACTION 

export const fetchTrans = async() => {
    try {
        const userId = getUserIdFromStorage();
        if(!userId){
            return {
                status: "error",
                message : "you must be logged in  "
            }
        }
        
        const {data } = await axios.get(transUrl,{
            headers:{
                Authorization: userId,
            },
        })
        return data;
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }
        
    }
}
// delete  section 
export const deleteTrans = async (ids) => {
    try{
     const userId = getUserIdFromStorage(); 
     if(!userId){
        return{
            status: "error",
            message: "you must be logged in"
        };
     }

       const {data} = await axios.delete(transUrl, {data:ids, headers:{Authorization : userId},})
       return data;
    }catch (error){
        return{
        status:'error',
        message: "error.message"
        };
    }
}

 
  
