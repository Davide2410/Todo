import { Todo } from "./models/todo"

export async function getTodo():Promise <Todo[]>{
  return (await (fetch('assets/db.json'))).json()
}