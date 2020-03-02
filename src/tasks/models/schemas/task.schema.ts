import * as mongoose from 'mongoose';
import { TaskStatus } from 'src/tasks/models/task.model';

export const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: { type: String,  required: true },
});