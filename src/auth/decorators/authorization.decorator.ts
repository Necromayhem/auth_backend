import { applyDecorators, UseGuards } from "@nestjs/common";
import { JwthGuard } from "../guards/auth.guard";

export function Authorization() {
    return applyDecorators(UseGuards(JwthGuard));
}