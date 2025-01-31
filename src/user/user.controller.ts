import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get(':id')
  findAll(@Param("id") id:string) {
    return {user :{
      id:id,
      }
    }
  }
  @Post()
  create(@Body("name") name:string ) {
    return "The user name is " + name;
  }
}
