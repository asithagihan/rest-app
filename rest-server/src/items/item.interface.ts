export interface IBaseItem {
  title: string;
  description: string;
}

export interface IItem extends IBaseItem {
  id: number;
}
