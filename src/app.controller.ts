import { Controller, Get } from "@nestjs/common";


@Controller('/app')
export class AppController {
  @Get("/hello")
  getRootRoute() {
    return "Hello world";
  }

  @Get("/bye")
  getByThere(){
      return "Bye There"
  }
}
