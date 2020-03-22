import { Injectable, Inject } from '@nestjs/common';
import { TaskStatus, Task } from '../models/task.model';
import { CreateTaskDto } from '../DTO/create-task.dto';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TasksService {

    constructor(@InjectModel('Task') private readonly taskModel: Model<any>) {}

    getAllTasks() {
        return this.taskModel.find();
    }

    async getTaskById(id: string): Promise<any> {
        return this.taskModel.findById(id);
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<any> {
        const {title, description} = createTaskDto;
        const task = new this.taskModel({
            title,
            description,
            status: TaskStatus.OPEN
        });
        return task.save();
    }

    async deleteTask(id: string): Promise<any> {
        return this.taskModel.findByIdAndDelete(id);
    }

    async updateTaskStatus(id: string, status: TaskStatus):Promise<any> {
        return this.taskModel.findByIdAndUpdate(id, {status: status}, {new: true});
    }
}
