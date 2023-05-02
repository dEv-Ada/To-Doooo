export interface TaskList {
  name: string;
  priority: string;
  date: string;
  time: string;
  type: string;
}

export interface TodoList {
  id: number;
  name: string;
  type: string;
}

export interface DragItem {
  index: number;
  id: string;
  type: string;
}
