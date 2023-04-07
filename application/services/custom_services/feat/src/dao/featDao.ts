import * as mongoose from 'mongoose';
import featModel from '../models/daomodels/feat';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class featDao {
    private feat = featModel;
    constructor() { }
    
    public async GpCreate(featData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into featDao.ts: GpCreate');

    let temp = new featModel(featData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(featData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into featDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.feat.aggregate(([
                        { $match: { $and: [{ created_by: featData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}