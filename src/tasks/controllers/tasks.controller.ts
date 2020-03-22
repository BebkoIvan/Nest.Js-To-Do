import { Controller, Get, Res, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { Response } from 'express';
import { CreateTaskDto } from '../DTO/create-task.dto';
import { TaskStatus } from '../models/task.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    
    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(
        @Body() CreateTaskDto: CreateTaskDto) {
        return this.tasksService.createTask(CreateTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id);
    }

    @Put('/:id')
    updateTask(
        @Param('id') id: string,
        @Body('status') status: TaskStatus) {
        return this.tasksService.updateTaskStatus(id,status);
    }
}
