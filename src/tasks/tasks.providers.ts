import { Connection } from 'mongoose';
import { TaskSchema } from 'src/tasks/models/schemas/task.schema';

export const tasksProviders = [
  {
    provide: 'TASK_MODEL',
    useFactory: (connection: Connection) => connection.model('Task', TaskSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];