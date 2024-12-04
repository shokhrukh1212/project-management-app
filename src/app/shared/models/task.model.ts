export interface CreateTask {
  title: string;
  order: number;
  description: string;
  userId: number;
  users: [string];
}

export interface CreatedTask {
  _id: string;
  title: string;
  order: number;
  boardId: string;
  columnId: string;
  description: string;
  userId: string;
  users: [string];
}
