import { Task } from "./task.js";


class Tasks {
    _lists = {};

    get listArr() {
        const lists = []
        Object.keys(this._lists).forEach(key => {
            const task = this._lists[key];
            lists.push(task)
        })
        return lists
    }

    constructor() {
        this._lists = {};
    }

    deleteTask(id=''){
        if (this._lists[id]) {
            delete this._lists[id]
        }
    }

    uploadTaskFromArray(tasks=[]){
        tasks.forEach(task =>{
            this._lists[task.id]=task
        })
    }


    createTask(desc='') {
        const task = new Task(desc)
        this._lists[task.id] = task
    }

    completeList(){
        this.listArr.forEach((task, i)=>{

            const idx = `${i+1}`.green
            const { desc,completeEn}=task
            const estate= (completeEn)
                            ?`Completada`.green
                            :`Pendiente`.red

            console.log(`${ idx } ${ desc } : ${ estate }`)

        })

    }

    listCompletsPendingTask(complets=true){

        let count=0
        this.listArr.forEach((task)=>{
            const { desc, completeEn}=task
        
           
            const estate= (completeEn)
                            ?`Completada`.green
                            :`Pendiente`.red
            
            if(complets){
               if(completeEn){
                   count +=1
                   console.log(`${(count + '. ').green +desc +' : '+ completeEn.green }`)   
               }
            }else{
                if (!completeEn) {
                    count +=1
                    console.log(`${ (count + '. ').red +desc +': '+ estate }`)   
                }
            }
        })
    }

    toggleComplets(ids=[]){
        ids.forEach(id=>{
            const task=this._lists[id]
            if(!task.completeEn){
                task.completeEn = new Date().toISOString()
            }
        })

        this.listArr.forEach(task=>{
            if(!ids.includes(task.id)){
                this._lists[task.id].completeEn=null
               
            }
        })


    }



}



export { Tasks }