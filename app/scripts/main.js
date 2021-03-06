Vue.component('todo-item', {
  props: ['todo'],
  template: '\
    <div class="input-group card-text">\
      <span class="input-group-addon">\
        <input type="checkbox" v-model="todo.status">\
      </span>\
      <label class="form-control" v-bind:class="{ strike: todo.status }">{{todo.description}}</label>\
    </div>' 
});

var app = new Vue({
    el: '#root',
    data: {
        show: 'showAll',
        task: '',
        activeClass: 'active',
        defaultClass: 'btn btn-primary',
        todos: [
        ],

    },

    methods: {
      addTask(){
        this.todos.push({description: this.task, status: false});
        this.task = '';
        return;
      }
    },

    computed: {
      allTodos(){
        return this.todos;
      },
      completedTodos(){
        return this.todos.filter(todo => todo.status);
      },
      incompleteTodos(){
        return this.todos.filter(todo => !todo.status);
      }
    }
});
