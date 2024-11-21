import { Suspense } from "react";
import { getTodos } from "@/lib/api";
import { TodoDialog } from "@/components/todos/todo-dialog";
import { DeleteTodo } from "@/components/todos/delete-todo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

function TodosTableSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 flex-1" />
          <Skeleton className="h-12 w-[100px]" />
        </div>
      ))}
    </div>
  );
}

async function TodosTable() {
  const todos = await getTodos();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo._id}>
            <TableCell className="font-medium">
              {todo.title}
            </TableCell>
            <TableCell>{todo.description}</TableCell>
            <TableCell>
              {format(new Date(todo.createdAt), "MMM d, yyyy")}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <TodoDialog todo={todo} mode="edit" />
                <DeleteTodo id={todo._id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
        {todos.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="text-center text-muted-foreground">
              No todos found. Create your first todo to get started.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Todo List</CardTitle>
              <CardDescription>
                Manage your tasks and stay organized.
              </CardDescription>
            </div>
            <TodoDialog mode="create" />
          </div>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<TodosTableSkeleton />}>
            <TodosTable />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  );
}