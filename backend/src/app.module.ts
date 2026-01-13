import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EventsModule } from './events/events.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    DatabaseModule,
    EventsModule,
    ThrottlerModule.forRoot({ throttlers: [{ ttl: 60, limit: 100 }] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
