import { IsDefined, IsNotEmpty, IsOptional } from "class-validator";
import { Member } from "./create-chat.dto";

export class UpdateGroupChatDTO {
    @IsNotEmpty()
    @IsDefined()
    id: string;

    @IsOptional()
    name?: string;

    @IsOptional()
    newMembers?: Member[] = [];

    @IsOptional()
    removeMembers?: string[] = [];
}