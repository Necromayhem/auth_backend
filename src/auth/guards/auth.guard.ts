import { AuthGuard } from "@nestjs/passport";

export class JwthGuard extends AuthGuard('jwt') {
    
}