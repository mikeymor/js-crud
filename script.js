var app = new function(){
    this.el = document.getElementsById('tasks');
    this.tasks=['ada','obi','olisa']

    this.fetchAll = function(){
        var data = '';

        if(this.tasks.length>0){
            for(var i= 0; i < this.tasks.length;i++){
                data+='<tr>';
                data+='<td>'+ (i+1)+'.' +this.task[i]+'</td>';
                data+='<td> <button onclick="app.edit('+i+')" class="btn btn-warning">Edit</button></td>';
                data+='<td> <button onclick="app.delete('+i+')" class="btn btn-danger">Delete</button></td>';
                data+='</tr>';

            }
        }

        this.count(this.tasks.length);
        return this.el.innerHTML = data ;

    };

    // to add a task to the todau list
    this.add = function(){
        el = document.getElementById('add-todo');
        var task = el.value;
        if(task){
            this.tasks.push(task.trim());
            //empty the imput v=box after submition
            el.value='';
            // display the todo-list table 
            //this.fetchAll();
            alert('successful');

        }

    };

    this.edit = function(item){

    };

    this.delete= function(item){

    };

    this.count= function(data){

    }

}
app.fetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.visibility="hidden";
}