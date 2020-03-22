import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';

const dataBaseConnectionUrl = 'mongodb+srv://admin:admin_password@cluster0-8txxc.gcp.mongodb.net/test?retryWrites=true&w=majority';
@Module({
  imports: [TasksModule, SharedModule, MongooseModule.forRoot(dataBaseConnectionUrl, {w: 1})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
