export interface MaterialResponseModel {
    d: D;
}

interface D {
    FrontId: string;
    NotificationNo: string;
    PartSet: PartSet;
}

interface PartSet {
    results: MaterialModel[];
}

export interface MaterialModel  {
    Material: string;
    Quantity: string;
    DescTxt: string;
    CustomerPrice: string;
    CustomerCurrency: string;
    RepairPrice: string;
    RepairCurrency: string;
    Available: string;
    ExtUnit: string;
    MatStatus: string;
    StorageLoc: string;
    StorageLocDesc: string;
    NDFQuote: string;
    NDFCounter: string;
    TSPercentage: string;
    TSPercentageCounter: string;
}