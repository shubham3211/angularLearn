import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products =  [
    {
			"ProductId": "HT-1000",
			"Category": "Laptops",
			"MainCategory": "Computer Systems",
			"TaxTarifCode": "1",
			"SupplierName": "Very Best Screens",
			"WeightMeasure": 4.2,
			"WeightUnit": "KG",
			"Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
			"Name": "Notebook Basic 15",
			"DateOfSale": "2017-03-26",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1000.jpg",
			"Status": "Available",
			"Quantity": 10,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 956,
			"Width": 30,
			"Depth": 18,
			"Height": 3,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1001",
			"Category": "Laptops",
			"MainCategory": "Computer Systems",
			"TaxTarifCode": "1",
			"SupplierName": "Very Best Screens",
			"WeightMeasure": 4.5,
			"WeightUnit": "KG",
			"Description": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
			"Name": "Notebook Basic 17",
			"DateOfSale": "2017-04-17",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1001.jpg",
			"Status": "Available",
			"Quantity": 20,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 1249,
			"Width": 29,
			"Depth": 17,
			"Height": 3.1,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1002",
			"Category": "Laptops",
			"MainCategory": "Computer Systems",
			"TaxTarifCode": "1",
			"SupplierName": "Very Best Screens",
			"WeightMeasure": 4.2,
			"WeightUnit": "KG",
			"Description": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
			"Name": "Notebook Basic 18",
			"DateOfSale": "2017-01-07",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1002.jpg",
			"Status": "Available",
			"Quantity": 10,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 1570,
			"Width": 28,
			"Depth": 19,
			"Height": 2.5,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1003",
			"Category": "Laptops",
			"MainCategory": "Computer Systems",
			"TaxTarifCode": "1",
			"SupplierName": "Smartcards",
			"WeightMeasure": 4.2,
			"WeightUnit": "KG",
			"Description": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
			"Name": "Notebook Basic 19",
			"DateOfSale": "2017-04-09",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1003.jpg",
			"Status": "Available",
			"Quantity": 15,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 1650,
			"Width": 32,
			"Depth": 21,
			"Height": 4,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1007",
			"Category": "Accessories",
			"MainCategory": "Computer Components",
			"TaxTarifCode": "1",
			"SupplierName": "Technocom",
			"WeightMeasure": 0.2,
			"WeightUnit": "KG",
			"Description": "Digital Organizer with State-of-the-Art Storage Encryption",
			"Name": "ITelO Vault",
			"DateOfSale": "2017-05-17",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1007.jpg",
			"Status": "Available",
			"Quantity": 15,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 299,
			"Width": 32,
			"Depth": 22,
			"Height": 3,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1010",
			"Category": "Accessories",
			"MainCategory": "Computer Systems",
			"TaxTarifCode": "1",
			"SupplierName": "Very Best Screens",
			"WeightMeasure": 4.3,
			"WeightUnit": "KG",
			"Description": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
			"Name": "Notebook Professional 15",
			"DateOfSale": "2017-02-22",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1010.jpg",
			"Status": "Available",
			"Quantity": 16,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 1999,
			"Width": 33,
			"Depth": 20,
			"Height": 3,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1011",
			"Category": "Laptops",
			"MainCategory": "Computer Systems",
			"TaxTarifCode": "1",
			"SupplierName": "Very Best Screens",
			"WeightMeasure": 4.1,
			"WeightUnit": "KG",
			"Description": "Notebook Professional 17 with 2,80 GHz quad core, 17\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
			"Name": "Notebook Professional 17",
			"DateOfSale": "2017-01-02",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1011.jpg",
			"Status": "Available",
			"Quantity": 17,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 2299,
			"Width": 33,
			"Depth": 23,
			"Height": 2,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1020",
			"Category": "Accessories",
			"MainCategory": "Computer Components",
			"TaxTarifCode": "1",
			"SupplierName": "Technocom",
			"WeightMeasure": 0.16,
			"WeightUnit": "KG",
			"Description": "Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications",
			"Name": "ITelO Vault Net",
			"DateOfSale": "2017-05-08",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1020.jpg",
			"Status": "Available",
			"Quantity": 14,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 459,
			"Width": 10,
			"Depth": 1.8,
			"Height": 17,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1021",
			"Category": "Accessories",
			"MainCategory": "Computer Components",
			"TaxTarifCode": "1",
			"SupplierName": "Technocom",
			"WeightMeasure": 0.18,
			"WeightUnit": "KG",
			"Description": "Digital Organizer with State-of-the-Art Encryption for Storage and Secure Stellite Link",
			"Name": "ITelO Vault SAT",
			"DateOfSale": "2017-06-30",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1021.jpg",
			"Status": "Available",
			"Quantity": 50,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 149,
			"Width": 11,
			"Depth": 1.7,
			"Height": 18,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1022",
			"Category": "Accessories",
			"MainCategory": "Computer Components",
			"TaxTarifCode": "1",
			"SupplierName": "Technocom",
			"WeightMeasure": 0.2,
			"WeightUnit": "KG",
			"Description": "32 GB Digital Assistant with high-resolution color screen",
			"Name": "Comfort Easy",
			"DateOfSale": "2017-03-02",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1022.jpg",
			"Status": "Available",
			"Quantity": 30,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 1679,
			"Width": 84,
			"Depth": 1.5,
			"Height": 14,
			"DimUnit": "cm"
		},
		{
			"ProductId": "HT-1023",
			"Category": "Accessories",
			"MainCategory": "Computer Components",
			"TaxTarifCode": "1",
			"SupplierName": "Technocom",
			"WeightMeasure": 0.8,
			"WeightUnit": "KG",
			"Description": "64 GB Digital Assistant with high-resolution color screen and synthesized voice output",
			"Name": "Comfort Senior",
			"DateOfSale": "2017-02-25",
			"ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1023.jpg",
			"Status": "Available",
			"Quantity": 24,
			"UoM": "PC",
			"CurrencyCode": "EUR",
			"Price": 512,
			"Width": 80,
			"Depth": 1.6,
			"Height": 13,
			"DimUnit": "cm"
		}
  ]

  constructor() { }

  public getProducts(){
    return this.products;
  }

  public getProductsById(id: string){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].ProductId == id){
        return this.products[i];
      }
    }
  }
}
