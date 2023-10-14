
import inquirer from 'inquirer'
import colors from 'colors'

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear Tarea`,
            },
            {
                value: '2',
                name: `${'2.'.green} Listar Tarea`,
            },
            {
                value: '3',
                name: `${'3.'.green} Listar Tareas Completadas`,
            },
            {
                value: '4',
                name: `${'4.'.green} Listar Tareas Pendientes`,
            },
            {
                value: '5',
                name: `${'5.'.green} Completar Tarea(s)`,
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar una tarea`,
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`,
            }

        ]
    }
]

const inquirerMenu = async () => {
    console.log('====================='.green)
    console.log('Seleccione una opción'.white)
    console.log('=====================\n'.green)

    const { opcion } = await inquirer.prompt(questions)
    return opcion

}



const pause = async () => {
    const question = [
        {
            name: "Enter",
            message: `Presione ${'enter'.green} para continuar`,
            type: "input",
        }
    ]
    console.log('\n')
    await inquirer.prompt(question)

}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc
}

const listDeleteTask = async (task = []) => {
    const choices = task.map((task, i) => {

        const idx = `${i + 1}.`.green
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(questions)
    return id;


}
const confirm = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(question)
    return ok
}


const listCheckList = async (task = []) => {
    const choices = task.map((task, i) => {

        const idx = `${i + 1}.`.green
        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked:(task.completeEn)?true:false
        }
    })

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(question)
    return ids;


}

export { inquirerMenu, pause, readInput, listDeleteTask, confirm,listCheckList  }