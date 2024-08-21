import './style.css'

interface Todo {
  title: string,
  isCompleted: boolean,
  readonly id: string
}

const todos: Todo[] = []

const todosContainer = document.querySelector(".todosContainer") as HTMLDivElement

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement

const myForm = document.getElementById("myform") as HTMLFormElement

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault()

  const todo: Todo = {
    title: todoInput.value, // Corrected this line
    isCompleted: false,
    id: String(Math.random() * 10)
  }

  todos.push(todo)
  todoInput.value = ""
  renderTodo(todos)
}

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {

  const todo: HTMLDivElement = document.createElement("div")
  todo.className = "todo"

  //Generating checkbox
  const checkbox: HTMLInputElement = document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  checkbox.className = "isCompleted"
  checkbox.checked = isCompleted
  checkbox.onchange = () => {
    todos.find(i => {
      if (i.id === id) i.isCompleted = checkbox?.checked
    })
    todo.className = checkbox.checked ? "todo opacity-half" : "todo"
    paragraph.className = checkbox?.checked ? "textCut" : ""
  }

  //Generating P tag for title
  const paragraph: HTMLParagraphElement = document.createElement("p")
  paragraph.innerText = title
  todo.className = isCompleted ? "todo opacity-half" : "todo"
  paragraph.className = isCompleted ? "textCut" : ""

  //Creating delete button
  const btn: HTMLButtonElement = document?.createElement("button")
  btn.innerText = "x"
  btn.className = "deleteBtn"
  btn.onclick = () => {
    const idx = todos.findIndex(i => i?.id === id)
    todos.splice(idx, 1)
    renderTodo(todos)
  }

  //appending elements
  todo.append(checkbox, paragraph, btn)
  todosContainer.append(todo)

}

const renderTodo = (todo: Todo[]) => {
  todosContainer.innerText = todo?.length ? "" : "No Todos Yet"
  return todo.forEach(x => generateTodoItem(x?.title, x?.isCompleted, x?.id))
}
