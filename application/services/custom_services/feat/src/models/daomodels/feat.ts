
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const featSchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   name: String
})

const featModel = mongoose.model('feat', featSchema, 'feat');
export default featModel;
