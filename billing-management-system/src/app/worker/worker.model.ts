export interface IWorker {
    id?: number,
    workerName: string,
    workerAddress: string,
    workerType: string,
    phonenumber: number,
    gender: 'male' | 'female'
    wage: number,
    birthdate: Date,
    lended_money: number,
    note: string,
    status: boolean;
    createdDate: Date;
    updatedDate: Date;
    workId:number;
}