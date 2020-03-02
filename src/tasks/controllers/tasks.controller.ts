import { Controller, Get, Res, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { Response } from 'express';
import { Task, TaskStatus } from '../models/task.model';
import { CreateTaskDto } from '../DTO/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    
    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(
        @Body() CreateTaskDto: CreateTaskDto) {
        console.log(CreateTaskDto);
        return this.tasksService.createTask(CreateTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id);
    }

    @Put('/:id')
    updateTask(
        @Param('id') id: string,
        @Body('status') status: TaskStatus): Task | string {
        return this.tasksService.updateTaskStatus(id,status);
    }
}
