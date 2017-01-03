Vue.component('todo-item', {
  props: ['todo'],
  template: '\
    <div class="input-group card-text" v-once>\
      <span class="input-group-addon">\
        <input type="checkbox" v-model="todo.status">\
      </span>\
      <label class="form-control">{{todo.description}}</label>\
    </div>'
});

var app = new Vue({
    el: '#root',
    data: {
        show: '',
        task: '',
        todos: [
        ],

    },

    methods: {
      addTask(){
        this.todos.push({description: this.task, status: false})
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
