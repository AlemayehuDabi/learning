import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query('todo').order('desc').collect();
    return todos;
  },
});

export const addTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert('todo', {
      text: args.text,
      isCompleted: false,
    });
  },
});

export const toggleComplete = mutation({
  args: { id: v.id('todo') },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) {
      throw new ConvexError('no todos');
    }

    await ctx.db.patch(args.id, {
      text: todo.text,
      isCompleted: !todo.isCompleted,
    });
  },
});

export const editTodo = mutation({
  args: { id: v.id('todo'), text: v.string() },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);

    if (!todo) {
      throw new ConvexError('no todo');
    }

    await ctx.db.replace(args.id, {
      text: args.text,
      isCompleted: todo?.isCompleted,
    });
  },
});

export const deleteTodo = mutation({
  args: { id: v.id('todo') },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);

    if (!todo) {
      throw new ConvexError('no todo');
    }
    await ctx.db.delete(args.id);
  },
});

export const clearAllTodos = mutation({
  handler: async (ctx) => {
    const todos = await ctx.db.query('todo').collect();

    for (const todo of todos) {
      await ctx.db.delete(todo._id);
    }

    return { deleteConunt: todos.length };
  },
});
