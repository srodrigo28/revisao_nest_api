import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as expbhs from 'express-handlebars';
import * as methodOverride from 'method-override';

async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.engine('hbs', expbhs.engine({extname: '.hbs', defaultLayout: 'main'}));
  app.use(methodOverride('_method'));

  await app.listen(3000);

}
bootstrap();
