const organizationModel = require('../models/organization');

const index = async (req, res, next) => {
    try {
        const is_data = await organizationModel.index();
        if(is_data.length > 0 ){
            res.status(200).json({'status':true,'status_code':200,'message':'Record fetch successfully ','data':is_data});
        }
        else{
            res.status(404).json({'status':true,'status_code':404,'message':'Record not found','data':'[]'});
        }

    } catch (error) {
        next(error);
    }
}


const insert = async(req,res,next)=>{
  try {
    const is_insert = await organizationModel.insert(req.body);
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

module.exports = {index , insert}