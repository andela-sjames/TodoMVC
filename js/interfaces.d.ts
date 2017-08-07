// Defines the interface of the structure of a task
interface ITodo {
  id: string,
  title: string,
  completed: boolean
}

// Defines the interface of the properties of the TodoItem component
interface ITodoItemProps {
  key : string,
  todo : ITodo;
  editing? : boolean;
  onSave: (val: any) => void;
  onDestroy: () => void;
  onEdit: ()  => void;
  onCancel: (event : any) => void;
  onToggle: () => void;
}

// Defines the interface of the state of the TodoItem component
interface ITodoItemState {
  editText : string
}

// Defines the interface of the properties of the Footer component
interface ITodoFooterProps {
  completedCount : number;
  onClearCompleted : any;
  nowShowing : string;
  count : number;
}

// Defines the TodoModel interface
interface ITodoModel {
  key : any;
  todos : Array<ITodo>;
  onChanges : Array<any>;
  subscribe(onChange:any) :any;
  inform(): any;
  addTodo(title : string) :any;
  toggleAll(checked:any): any;
  toggle(todoToToggle: any): any;
  destroy(todo: any): any;
  save(todoToSaveany: any, text: any): any;
  clearCompleted():any;
}

// Defines the interface of the properties of the App component
interface IAppProps {
  model : ITodoModel;
}

// Defines the interface of the state of the App component
interface IAppState {
  editing? : string;
  nowShowing? : string
}