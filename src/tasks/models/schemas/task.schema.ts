import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: { type: String,  required: true, enum: ['OPEN', 'DONE', 'IN_PROGRESS'] },
});