import colors from 'colors'

const showMenu = () => {
    console.clear()

    return new Promise(resolve => {
        console.log('====================='.green)
        console.log('Seleccione una opción'.green)
        console.log('=====================\n'.green)

        console.log(`${'1.'.green} Crear Tarea`)
        console.log(`${'3.'.green} Listar Tareas Completadas`)
        console.log(`${'2.'.green} Listar Tarea`)
        console.log(`${'4.'.green} Listar Tareas Pendientes`)
        console.log(`${'5.'.green} Completar Tarea(s)`)
        console.log(`${'6.'.green} Borrar una tarea`)
        console.log(`${'0.'.green} Salir \n`)


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question('Seleccione una opción: ', (opt) => {
            readLine.close()
            resolve(opt)

        })
    })

}

const pause = () => {

    return new Promise(resolve=>{
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        })
    })

}



export {
    showMenu,
    pause
}