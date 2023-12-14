const roleModel = require('../models/role');
const {RoleSchema} = require('../helpers/validations')

const index= async(req,res,next)=>{
   try {
    const is_data = await roleModel.index();
    if(is_data.length > 0){
        res.status(200).json({'status':true,'status_code':200,'message':'Record fetch successfully ','data':is_data});
    }
    else{
        res.status(404).json({'status':true,'status_code':404,'message':'Record not found','data':'[]'});
    } 
    
   } catch (error) {
    
   }

}


const insert = async(req,res,next)=>{
  
    const validationResult = RoleSchema.validate(req.body);
    const { error } = RoleSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map(detail => detail.message);
    return res.status(400).json({ success: false, message: 'Validation failed', errors: errorMessages });
  }


try {
    const is_insert = await roleModel.insert(req.body);
    if(is_insert ){
        res.status(200).json({'status':true,'status_code':200,'message':'Record inserted successfully ','data':is_insert});
    }
    else{
        res.status(404).json({'status':true,'status_code':404,'message':'Record not inserted','data':'[]'});
    }   
  } catch (error) {
    console.log(error);
    res.status(500).json({'status':false,'status_code':500,'error':'internal server error','error-message':error.message});

  }
}



module.exports = {index,insert}