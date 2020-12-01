export interface Item {
    id: string;
    name: string;
    imageId: string;
    health: number;
    vest: number;
    experience: number;
    hungry: number;
    money: number;
    statusPoint: number;
    isInitial: boolean;
    quantityInitial: number;
    isVirtual: boolean;
}

export interface RequestItem {
    id: string;
    name: string;
    imageId: string;
    health: number;
    vest: number;
    experience: number;
    hungry: number;
    money: number;
    statusPoint: number;
    isInitial: any;
    quantityInitial: number;
    isVirtual: any;
}