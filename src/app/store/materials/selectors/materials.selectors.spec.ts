import { getMaterial, getMaterials, getSelectedMaterial } from "./materials.selectors";
import { MaterialsState } from "../materials-state";

describe("Materials Selector", () => {
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
    })
    it("Should return all materials", () => {
        // Assert
        expect(getMaterials.projector(mockState)).toEqual(mockState.materials)
    })
    it("Should return selected material", () => {
        // Assert
        expect(getSelectedMaterial.projector(mockState)).toEqual(mockState.currentSelected)
    })
    it("Should return the specific material by id", () => {
        // Assert
        expect(getMaterial(1).projector(mockState)).toEqual(mockState.materials[0])
    })
})