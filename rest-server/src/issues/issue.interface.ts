export interface IBaseIssue {
  title: string;
  description: string;
}

export interface IIssue extends IBaseIssue {
  id: number;
}
