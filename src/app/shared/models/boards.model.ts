export interface BoardRequest {
  title: string;
  owner: string;
  users: string[];
}

export interface BoardResponse extends BoardRequest {
  _id: string;
}
