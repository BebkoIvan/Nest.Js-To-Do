import { Injectable, Inject } from '@nestjs/common';
import { TaskStatus, Task } from '../models/task.model';
import { CreateTaskDto } from '../DTO/create-task.dto';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

    tasks = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<any> {
        const {title, description} = createTaskDto;
        const task = new this.taskModel({
            title,
            description,
            status: TaskStatus.OPEN
        });

        console.log(task);
        return task.save();
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTaskStatus(id: string, status: TaskStatus) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) return 'There is no such task!';
        else {
            task.status = status;
            return task;
        }
    }
}
