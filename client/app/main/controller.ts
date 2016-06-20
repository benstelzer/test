namespace app {
export class MainController {
  public todo: ITodo;
  public todos: ITodo[];



  public createTask() {
    this.TodoService.create(this.todo);
    this.todos.push(<ITodo>this.todo);
    this.todo;

  }

  public remove(t: ITodo) {
        this.TodoService.remove(t._id).then(() => {
        this.todos.splice(this.todos.indexOf(t),1);
        }, () => {
          console.error("error!!!!---ERROR!!--i")
        } )
      }



    constructor (private TodoService: app.TodoService,
    private $state:ng.ui.IStateService,
  private $stateParams: ng.ui.IStateParamsService) {


this.todos = TodoService.getAll();



    }
}
angular.module("app").controller("MainController", MainController)
}
