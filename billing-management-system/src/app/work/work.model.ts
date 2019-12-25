import { IWorker } from '../worker/worker.model';

export interface Work {
    id?: number;
    workName: string;
    address: string;
    discription?: string;
    createddate: Date;
    updateddate: Date;
    status: boolean;
    // workers: IWorker[];
    isCompleted: boolean;
    userId: number;
    amount: number;
}