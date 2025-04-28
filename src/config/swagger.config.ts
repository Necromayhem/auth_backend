import { DocumentBuilder } from "@nestjs/swagger";

export function getSwaggerConfig(){
    return new DocumentBuilder()
        .setTitle('Auth API')
        .setDescription('API documentation for auth')
        .setVersion('1.0.0')
        .setContact('Alex Kuklev', 'https://github.com/Necromayhem', 'example@mail.com')
        .addBearerAuth()
        .build();
}