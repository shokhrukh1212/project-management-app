export interface Board {
  _id: number;
  title: string;
  description?: string;
  boardInfo?: BoardColumn[];
}

export interface BoardColumn {
  name: string;
  description: string;
}
