var app = new function(){
    this.el = documet.getElementsById('tasks');
    this.tasks=[]

    this.fetchAll = function(){
        var data = '';

        if(this.tasks.length>0){
            for(var i=0; i<this.tasks.length;i++){
                data+='<tr>';
                data+='<td>'+ (i+1)+'.' +this.task[i]+'</td>';
                data+='<td> <button onclick="app.edit('+i+')" class="btn btn-warning">Edit</button></td>';
                data+='<td> <button onclick="app.delete('+i+')" class="btn btn-danger">Delete</button></td>'

            }
        }

        this.count(this.tasks.length);
        return this.el.innerHTML = data ;

    }
}