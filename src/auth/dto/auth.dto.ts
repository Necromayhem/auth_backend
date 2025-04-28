import { ApiProperty } from "@nestjs/swagger";

export class AuthResponse {
     @ApiProperty({
        description: 'JWT access token',
        example: 'jdshfhgf1bdfHjdsjd3kjsd...'
      })
    accessToken: string;
}