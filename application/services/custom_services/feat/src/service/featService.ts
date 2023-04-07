import { Request, Response } from 'express';
import {featDao} from '../dao/featDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let feat = new featDao();

export class featService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featService.ts: GpCreate')
     let  featData = req.body;
     feat.GpCreate(featData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from featService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featService.ts: GpGetNounCreatedBy')
     let  featData = { created_by: req.query.createdby };
     feat.GpGetNounCreatedBy(featData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from featService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}