var app = new Vue({
    el: '#root',
    data: {
        task: 'Add a task',
        status: false,
        todos: [
        ]
    },

    methods: {
      addTask: function(){
        return this.todos.push(`{description: ${app.task}, status: false}`);
      }
    },

    computed: {

    }
});
