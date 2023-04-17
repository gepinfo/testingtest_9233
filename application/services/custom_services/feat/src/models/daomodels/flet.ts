
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const fletSchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   datas: String
})

const fletModel = mongoose.model('flet', fletSchema, 'flet');
export default fletModel;
