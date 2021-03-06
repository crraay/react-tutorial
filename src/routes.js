import {TodoList} from "./components/TodoList";
import {BasicExamplesPage, FormExamplesPage, StateExamplesPage, TestPage} from "./components/others";
import {ContextPage} from "./pages/ContextPage";
import {ModalPage} from "./pages/ModalPage";

export const routes = [
  {
    component: BasicExamplesPage,
    path: '/basic'
  },
  {
    component: StateExamplesPage,
    path: '/state'
  },
  {
    component: FormExamplesPage,
    path: '/forms'
  },
  {
    component: TodoList,
    path: '/todo'
  },
  {
    component: TestPage,
    path: '/test/:id'
  },
  {
    component: ContextPage,
    path: '/context'
  },
  {
    component: ModalPage,
    path: '/modal'
  },
]
