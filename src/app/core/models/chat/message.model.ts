
export interface Message {
  id: number;
  type: string;
  content: string;
  createdBy?: string;
  createdAt: Date;
}
