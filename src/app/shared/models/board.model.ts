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

export interface createNewBoard {
  title: string;
  owner: string;
  users: string[];
}
export interface createdBoard {
  _id: string;
  title: string;
  owner: string;
  users: string[];
}
