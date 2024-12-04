export interface CreateColumn {
  title: string;
  order: number;
}
export interface CreatedColumn {
  _id: string;
  title: string;
  order: number;
  boardId: string;
}
