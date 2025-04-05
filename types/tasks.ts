export interface ITask {
  id: string,
  text: string
}


export interface ITaskV2 {
  id: string,
  text: string,
  done?: boolean
}