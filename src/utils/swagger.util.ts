import type { INestApplication } from "@nestjs/common";
import { SwaggerModule } from "@nestjs/swagger";
import { getSwaggerConfig } from "src/config/swagger.config";

export function setupSwagger(app: INestApplication){
    const congig = getSwaggerConfig();

  const document = SwaggerModule.createDocument(app, congig);

  SwaggerModule.setup('/docs', app, document , {
    jsonDocumentUrl: '/swagger.json',
    yamlDocumentUrl: '/swagger.yaml',
    customSiteTitle: 'Nest js Api docs',
  });

}