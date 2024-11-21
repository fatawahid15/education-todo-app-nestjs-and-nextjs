"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Todo } from "@/lib/types";
import { updateTodo } from "@/lib/api";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface ToggleTodoProps {
  todo: Todo;
}

export function ToggleTodo({ todo }: ToggleTodoProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleToggle = async (checked: boolean) => {
    setLoading(true);
    try {
      await updateTodo(todo._id, { completed: checked });
      router.refresh();
    } catch (error) {
      toast.error("Failed to update todo status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Checkbox
      checked={todo.completed}
      onCheckedChange={handleToggle}
      disabled={loading}
    />
  );
}