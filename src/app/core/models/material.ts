export interface MaterialResponseModel {
    d: D;
}

interface D {
    FrontId: string;
    NotificationNo: string;
    PartSet: PartSet;
}

interface PartSet {
    results: MaterialResponseModel[];
}

export interface MaterialResponseModel  {
    Material: string;
    Quantity: number;
    DescTxt: string;
    CustomerPrice: string;
    CustomerCurrency: string;
    RepairPrice: string;
    RepairCurrency: string;
    Available: number;
    ExtUnit: string;
    MatStatus: string;
    StorageLoc: string;
    StorageLocDesc: string;
    NDFQuote: string;
    NDFCounter: string;
    TSPercentage: string;
    TSPercentageCounter: string;
}

export interface MaterialModel  {
    Id: number,
    Material: string;
    Quantity: number;
    DescTxt: string;
    CustomerPrice: string;
    CustomerCurrency: string;
    RepairPrice: string;
    RepairCurrency: string;
    Available: number;
    ExtUnit: string;
    MatStatus: string;
    StorageLoc: string;
    StorageLocDesc: string;
    NDFQuote: string;
    NDFCounter: string;
    TSPercentage: string;
    TSPercentageCounter: string;
}