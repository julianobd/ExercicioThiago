export interface Jobs {
    name: string;
    color: string;
    canHeal: boolean;
    canArrest: boolean;
    canDoMarriage: boolean;
    isDefault: boolean;
    requirementXp: number;
    publicJob: boolean;
}

export interface RequestJobs {
    name: string;
    color: string;
    canHeal: any;
    canArrest: any;
    canDoMarriage: any;
    isDefault: any;
    requirementXp: number;
    publicJob: any;
}


