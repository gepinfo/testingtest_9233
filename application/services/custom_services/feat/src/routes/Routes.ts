import { Request, Response, NextFunction } from "express";
import { featController } from '../controller/featController';


export class Routes {
    private feat: featController = new featController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/feat').post(this.feat.GpCreate);
app.route('/feat/userid/created_by').get(this.feat.GpGetNounCreatedBy);
     }

}