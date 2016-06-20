namespace app {

    interface ITodoResourceClass extends ITodo, ng.resource.IResource<ITodoResourceClass> { }
    interface ITodoResource extends ng.resource.IResourceClass<ITodoResourceClass> {
        update(params: Object);
        update(params: Object, body: Object);
    }


    export class TodoService {

        private TodoResource: ITodoResource;


        public getAll() {
            return this.TodoResource.query();
        }



        public getOne(id) {
            return this.TodoResource.get({ id: id });
        }

        public remove(id) {
            return this.TodoResource.remove({ id: id }).$promise;

        }



public create(todo:ITodo) {
        return this.TodoResource.save(todo).$promise;

    }



    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private $resource: ng.resource.IResourceService
    )

    {
        this.TodoResource = <ITodoResource>$resource("/api/v1/testing/:id", null, { "update": { "method": "PUT" } })



    }
}
angular.module("app").service("TodoService", TodoService);
}
