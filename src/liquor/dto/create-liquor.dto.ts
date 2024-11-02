import { Type } from "class-transformer";
import { IsString, IsPositive, IsNumber, Min, } from "class-validator";

export class CreateLiquorDto {
  
  @IsString()
  public name : string;

  @IsNumber()
  @IsPositive()
  @Min(0)
  @Type(()=> Number)
  public price :number;

  @IsNumber()
  @IsPositive()
  @Min(0)
  @Type(()=> Number)
  public currentStock : number;

  @IsNumber()
  @IsPositive()
  @Min(50)
  @Type(()=>Number)
  public reorderStock: number;

  @IsString()
  public liquorType: string;

  
}
