# NestJS MongoDB REST API Tutorial

## Overview
This tutorial demonstrates how to build a RESTful API using NestJS framework with MongoDB as the database.

## Prerequisites
- Basic understanding of TypeScript
- NodeJS installed
- MongoDB installed
- Basic knowledge of ExpressJS

## Installation Steps

1. Install NestJS CLI:
```bash
sudo npm install -g @nestjs/cli
```

2. Create new project:
```bash
nest new todo-rest-app
cd todo-rest-app
```

3. Install required dependencies:
```bash
npm install --save @nestjs/mongoose mongoose
```

## Project Setup

### 1. Configure MongoDB Connection
Add MongoDB configuration in `app.module.ts`:
```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
```

### 2. Generate Required Components
```bash
# Generate Module
nest g module Todo

# Generate Service
nest g service Todo

# Generate Controller
nest g controller Todo
```

### 3. Create Schema Structure
Create the following directory structure:
```
src/
└── todo/
    ├── schemas/
    │   └── todo.schema.ts
    └── dto/
        ├── base-todo.dto.ts
        ├── create-todo.dto.ts
        └── update-todo.dto.ts
```

## Implementation Details

### 1. Define Todo Schema
```typescript
@Schema()
export class Todo {
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop()
    completedAt?: Date;

    @Prop({ required: true })
    createdAt: Date;

    @Prop()
    deletedAt?: Date;
}
```

### 2. Implement CRUD Operations
TodoService will include:
- findAll()
- findOne(id)
- create(createTodoDto)
- update(id, updateTodoDto)
- delete(id)

### 3. Setup API Endpoints
Available endpoints:
- GET /todos - List all todos
- GET /todos/:id - Get single todo
- POST /todos - Create todo
- PUT /todos/:id - Update todo
- DELETE /todos/:id - Delete todo

## Testing

1. Start the application:
```bash
npm run start:dev
```

2. Test endpoints using a REST client (like Postman or Insomnia):
- Create Todo: POST http://localhost:3000/todos
- Get Todos: GET http://localhost:3000/todos
- Update Todo: PUT http://localhost:3000/todos/:id
- Delete Todo: DELETE http://localhost:3000/todos/:id

## Project Structure
```
src/
├── app.module.ts
└── todo/
    ├── todo.module.ts
    ├── todo.service.ts
    ├── todo.controller.ts
    ├── schemas/
    │   └── todo.schema.ts
    └── dto/
        ├── base-todo.dto.ts
        ├── create-todo.dto.ts
        └── update-todo.dto.ts
```

## Additional Resources
- [NestJS Official Documentation](https://docs.nestjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tutorial Source](https://dev.to/carlomigueldy/building-a-restful-api-with-nestjs-and-mongodb-mongoose-2165)

## Contributing
Feel free to submit issues and enhancement requests.# education-todo-app-nestjs-and-nextjs
