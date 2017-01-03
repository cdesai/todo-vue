Vue.component('todo-item', {
  props: ['todo'],
  template: '\
    <div class="input-group card-text" v-once>\
      <span class="input-group-addon">\
        <input type="checkbox" v-bind:checked="todo.status" v-model="todo.status">\
      </span>\
      <label class="form-control">{{todo.description}}</label>\
    </div>'
});

var app = new Vue({
    el: '#root',
    data: {
        show: '',
        task: 'Add a task',
        todos: [
        ],

    },

    methods: {
      addTask(){
        return this.todos.push({description: this.task, status: false});
      }
    },

    computed: {
      completedTodos(){
        return this.todos.filter(todo => todo.status);
      },
      incompleteTodos(){
        return this.todos.filter(todo => !todo.status);
      }
    }
});
