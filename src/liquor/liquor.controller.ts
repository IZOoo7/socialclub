import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LiquorService } from './liquor.service';
import { CreateLiquorDto } from './dto/create-liquor.dto';
import { UpdateLiquorDto } from './dto/update-liquor.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('liquor')
export class LiquorController {
  constructor(private readonly liquorService: LiquorService) {}
  //@Post()
  @MessagePattern({cmd :'cerate_liquor'})
  create(@Payload() createLiquorDto: CreateLiquorDto) {
    return this.liquorService.create(createLiquorDto);
  }

  //@Get()
  @MessagePattern({cmd:'find_all_liquor'})
  findAll() {
    return this.liquorService.findAll();
  }
  
  //@Get(':id')
  @MessagePattern({cmd:'find_all'})
  findOne(@Payload('id',ParseIntPipe) id: number) {
    return this.liquorService.findOne(+id);
  }

  //@Patch(':id')
  @MessagePattern({cmd:'update-product'})
  update(@Payload('id')  updateLiquorDto: UpdateLiquorDto) {
    return this.liquorService.update(updateLiquorDto.id, updateLiquorDto);
  }

  //@Delete(':id')
  @MessagePattern({cmd:'remove-liquor'})
  remove(@Payload('id',ParseIntPipe) id: number) {
    return this.liquorService.remove(+id);
  }
}
