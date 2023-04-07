import { Request, Response } from 'express';
import { featService } from '../service/featService';
import { CustomLogger } from '../config/Logger'
let feat = new featService();

export class featController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    feat.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    feat.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featController.ts: GpGetNounCreatedBy');
    })}


}