
import { inquirerMenu, pause, readInput,listDeleteTask ,confirm,listCheckList } from './helpers/inquirer.js';
import { saveDB, readDB } from './helpers/saveFile.js';
import { Tasks } from './models/tasks.js';

const main = async () => {

    let opt = '';
    const tasks = new Tasks()
    const tasksbd = readDB()

    if (tasksbd) {
        tasks.uploadTaskFromArray(tasksbd)
    }

    do {
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                const desc = await readInput('Description:')
                tasks.createTask(desc)
                break;
            case '2'://listar todas las tareas
                tasks.completeList()
                break;
            case '3'://listar las tareas completadas
                tasks.listCompletsPendingTask(true)
                break;

            case '4'://listar las tareas pendientes
                tasks.listCompletsPendingTask(false)
                break;
            case '5'://completado || pendiente
                  const ids=  await listCheckList (tasks.listArr)
                  tasks.toggleComplets(ids)
                break;
            case '6'://Eliminar tareas
                const id= await listDeleteTask(tasks.listArr)
                if(id!=='0'){
                    const ok=await confirm('¿Estás seguro?')
                    if(ok){
                        tasks.deleteTask(id)
                        console.log('Tarea Borrada')
                    }
                }
                break;
 
        }

        saveDB(tasks.listArr)
        await pause()
    } while (opt !== '0');

}


main();

