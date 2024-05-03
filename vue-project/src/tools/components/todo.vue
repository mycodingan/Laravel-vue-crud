<template>
    <div class="container" style="max-width: 600px">
        <h2 class="text-center mt-5">Todo list Joshua</h2>

        <div class="d-flex mt-5 w-100">
            <input type="text" v-model="task" placeholder="Enter task" class="w-100 form-control"
                @keyup.enter="addTask">
                    <button class="btn btn-primary w-80" @click="addTask">Add Task</button>
        </div>

        <ul class="list-group mt-3">
            <li class="list-group-item" v-for="(todo, index) in todos" :key="index">        
                <div class="d-flex justify-content-between align-items-center">
                    <div v-if="!editing || editingIndex !== index">{{ todo }}</div>
                    <input v-else type="text" v-model="editedTask" class="form-control">
                    <div>
                        <button class="btn btn-sm btn-info" @click="editTask(index)">
                            {{ editing && editingIndex === index ? 'Save' : 'Edit' }}
                        </button>
                        <button class="btn btn-sm btn-danger ml-2" @click="deleteTask(index)">Delete</button>
                    </div>
                </div>
            </li>
        </ul>
            

        <div class="mt-3">x
            <button class="btn btn-danger" @click="clearTodo">Clear Todo</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'TodoApp',
    data() {
        return {
            task: '',
            todos: [],
            editing: false,
            editingIndex: null,
            editedTask: '',
        };
    },
    methods: {
        addTask() {
            if (this.task.trim()) {
                this.todos.push(this.task.trim());
                this.task = '';
            }
        },
        editTask(index) {
            if (this.editing && this.editingIndex === index) {
                if (this.editedTask.trim()) {
                    this.todos[index]=this.editedTask.trim();
                    this.editing = false;
                    this.editingIndex = null;
                    this.editedTask = '';
                }
            } else {
                this.editing = true;
                this.editingIndex = index;
                this.editedTask = this.todos[index];
            }
        },
        deleteTask(index) {
            this.todos.splice(index, 1);
            if (this.editing && this.editingIndex === index) {
                this.editing = false;
                this.editingIndex = null;
                this.editedTask = '';
            }
        },
        clearTodo() {
            this.todos = [];
            this.editing = false;
            this.editingIndex = null;
            this.editedTask = '';
        },
    },
};
</script>

<style></style>