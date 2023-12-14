const companyModel = require('../models/company');


const index = async(req, res, next)=>{    
    try {
        const is_data = await companyModel.index();
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

const insert = async(req, res, next)=>{
    try {
        const is_data = await companyModel.insert(req.body);       
        if(is_data){
            res.status(200).json({'status':true,'status_code':200,'message':'Record inserted successfully ','data':is_data});
        }
        else{
            res.status(404).json({'status':true,'status_code':404,'message':'Record not found','data':'[]'});
        }
        
    } catch (error) {
        next(error);
    }
}

module.exports = {insert, index}