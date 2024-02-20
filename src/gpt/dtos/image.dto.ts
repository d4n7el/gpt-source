import { IsInt, IsOptional, IsString } from 'class-validator';

export class ImageDto {
  @IsString()
  readonly prompt: string;

  @IsInt()
  @IsOptional()
  readonly size?:
    | '256x256'
    | '512x512'
    | '1024x1024'
    | '1792x1024'
    | '1024x1792';
}
