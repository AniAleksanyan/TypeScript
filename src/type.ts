export interface IToDo{
    id: number
    text: string
    completed: boolean
}
export interface IContext{
    items: IToDo[]
    update: (x:number) => void
}