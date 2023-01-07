interface newsItemTypes {
  title: string;
  press: string;
  image: string;
  date: string;
  url: string;
}

interface todoTypes {
  id: number;
  title: string;
  description: string;
  repeat: number[];
  isComplete: boolean;
  createDate: string;
}
interface stateTypes {
  todos: Array[propsTodoTypes];
}