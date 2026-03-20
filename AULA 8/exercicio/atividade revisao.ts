type Tarefa = {
    descricao: string, 
    prioridade: number, 
    concluida: boolean
}

// função tarefa
const tarefas: Tarefa[] = [
    { descricao: "Fazer relatório", prioridade: 2, concluida: false},
    { descricao: "Enviar e-mail", prioridade: 3, concluida: false},
    { descricao: "Reunião com equipe", prioridade: 1, concluida: false}
]

function imprimirTarefa(descricao: string, indice: number, totalTarefas: number): void{
    console.log(`Tarefa concluída: ${descricao}`) ;
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`) ;
}

function executarTarefas(
    tarefas: Tarefa[], 
    callback: (descricao: string, indice: number, total: number) => void, 
    intervalo: number = 1000
): void{

    tarefas.sort((a, b) => b.prioridade - a.prioridade) // forma decrescente
    
    let contador = 0

    const interval = setInterval(() => {
        const taskCount = tarefas.length
        if(contador < taskCount|| tarefas[contador]?.descricao === 'Cancelar'){// ? checa se o número é undefined ou nulo
            clearInterval(interval)
        }else{
            const tarefa = tarefas[contador]
            if(tarefa){
               tarefa.concluida = true
               callback(tarefa.descricao, contador, taskCount)
               contador++
            }
        }
    }, intervalo)

}

executarTarefas(tarefas,imprimirTarefa, 1500)