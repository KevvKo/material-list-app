import { MaterialModel } from "src/app/core/models";
import { MaterialsAddItemsAction } from "../actions/materials-add-items.actions";
import { MaterialsState } from "../materials-state";
import { materialsReducer } from "./material.reducers";
import { BookAmountAction } from '../actions/materials-action.types'
import { MaterialsUpdateAmountAction } from "../actions/materials-update-amount.actions";
import { MaterialsSelectedAction } from "../actions/materials-selected.actions";

describe("Materials Reducer", () => {
    let mockState: MaterialsState;

    beforeEach(() => {
        mockState = {
            materials: [
                {
                    "Id": 1,
                    "Material": "6396734",
                    "Quantity": 2,
                    "DescTxt": "E06396734       \\D400",
                    "CustomerPrice": "40000.000",
                    "CustomerCurrency": "EUR",
                    "RepairPrice": "9592.000",
                    "RepairCurrency": "EUR",
                    "Available": 16093,
                    "ExtUnit": "ST",
                    "MatStatus": "",
                    "StorageLoc": "1000",
                    "StorageLocDesc": "10032476",
                    "NDFQuote": "002",
                    "NDFCounter": "000001",
                    "TSPercentage": "016",
                    "TSPercentageCounter": "000001"
                  },
                  {
                    "Id": 2,
                    "Material": "6396734",
                    "Quantity": 2,
                    "DescTxt": "E06396734       \\D400",
                    "CustomerPrice": "40000.000",
                    "CustomerCurrency": "EUR",
                    "RepairPrice": "9592.000",
                    "RepairCurrency": "EUR",
                    "Available": 22994,
                    "ExtUnit": "ST",
                    "MatStatus": "",
                    "StorageLoc": "1100",
                    "StorageLocDesc": "10032508",
                    "NDFQuote": "002",
                    "NDFCounter": "000001",
                    "TSPercentage": "016",
                    "TSPercentageCounter": "000001"
                  },
            ],
            currentSelected: {
                "Id": 2,
                "Material": "6396734",
                "Quantity": 2,
                "DescTxt": "E06396734       \\D400",
                "CustomerPrice": "40000.000",
                "CustomerCurrency": "EUR",
                "RepairPrice": "9592.000",
                "RepairCurrency": "EUR",
                "Available": 22994,
                "ExtUnit": "ST",
                "MatStatus": "",
                "StorageLoc": "1100",
                "StorageLocDesc": "10032508",
                "NDFQuote": "002",
                "NDFCounter": "000001",
                "TSPercentage": "016",
                "TSPercentageCounter": "000001"
              },
        }
    });

    describe("addItems", () => {
        it("Should add new items to the materials list", () => {
            const newItems = [
                {
                    "Id": 3,
                    "Material": "6396734",
                    "Quantity": 5,
                    "DescTxt": "E06396734       \\D400",
                    "CustomerPrice": "40000.000",
                    "CustomerCurrency": "EUR",
                    "RepairPrice": "9592.000",
                    "RepairCurrency": "EUR",
                    "Available": 123141,
                    "ExtUnit": "RR",
                    "MatStatus": "",
                    "StorageLoc": "XX",
                    "StorageLocDesc": "10032508",
                    "NDFQuote": "002",
                    "NDFCounter": "000001",
                    "TSPercentage": "016",
                    "TSPercentageCounter": "000001"
                  },
            ] as MaterialModel[];
            const action = MaterialsAddItemsAction.addItems({ payload: newItems})
            const expectedState = [...mockState.materials, ...newItems]
            
            // Act
            const newState = materialsReducer(mockState, action)
            
            // Assert
            expect(newState.materials).toEqual(expectedState);
        })
    })
    describe("updateAmount", () => {
        it("Should update the correct amount", () => {
            
            const payload = {
                amount: 10,
                materialId: 1
            } as BookAmountAction;

            const action = MaterialsUpdateAmountAction.updateAmountSuccess({ payload })
            const expectedAvailable = mockState.materials[0].Available - payload.amount;
            
            // Act
            const newState = materialsReducer(mockState, action)
            
            // Assert
            expect(newState.materials[0].Available).toBe(expectedAvailable);
        })
    })
    describe("remove selected material", () => {
        it("Should remove the current selected material", () => {

            const action = MaterialsSelectedAction.remove()
            
            // Act
            const newState = materialsReducer(mockState, action)
            
            // Assert
            expect(newState.currentSelected).toBeUndefined();
        }),
        it("Should update the current selected material", () => {

            const newSelectedMaterial = mockState.materials[0];
            const payload = {
                material: newSelectedMaterial
            }
            const action = MaterialsSelectedAction.update({ payload })
            
            // Act
            const newState = materialsReducer(mockState, action)
            
            // Assert
            expect(newState.currentSelected).toEqual(newSelectedMaterial);
        })
    })
})