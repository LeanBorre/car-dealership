import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Dodge', model: 'Durango' },
    { id: 2, brand: 'Pontiac', model: 'Trans Sport' },
    { id: 3, brand: 'Mercury', model: 'Capri' },
    { id: 4, brand: 'Chevrolet', model: 'Astro' },
    { id: 5, brand: 'Subaru', model: 'Loyale' },
    { id: 6, brand: 'GMC', model: 'Yukon XL 1500' },
    { id: 7, brand: 'Chrysler', model: 'Prowler' },
    { id: 8, brand: 'Chevrolet', model: 'Corvette' },
    { id: 9, brand: 'Ford', model: 'Mustang' },
    { id: 10, brand: 'Volvo', model: 'C30' },
    { id: 11, brand: 'GMC', model: 'Sierra 3500' },
    { id: 12, brand: 'Chevrolet', model: 'Suburban 1500' },
    { id: 13, brand: 'Ram', model: '3500' },
    { id: 14, brand: 'Honda', model: 'S2000' },
    { id: 15, brand: 'Eagle', model: 'Summit' },
    { id: 16, brand: 'Ford', model: 'F350' },
    { id: 17, brand: 'Ram', model: '3500' },
    { id: 18, brand: 'Eagle', model: 'Summit' },
    { id: 19, brand: 'Mercedes-Benz', model: 'SLK55 AMG' },
    { id: 20, brand: 'Jeep', model: 'Wrangler' },
    { id: 21, brand: 'Chevrolet', model: 'Venture' },
    { id: 22, brand: 'Subaru', model: 'SVX' },
    { id: 23, brand: 'Lamborghini', model: 'Diablo' },
    { id: 24, brand: 'Scion', model: 'xA' },
    { id: 25, brand: 'Nissan', model: 'Xterra' },
    { id: 26, brand: 'Toyota', model: 'Paseo' },
    { id: 27, brand: 'GMC', model: 'Suburban 1500' },
    { id: 28, brand: 'Lexus', model: 'LS' },
    { id: 29, brand: 'Porsche', model: 'Boxster' },
    { id: 30, brand: 'Subaru', model: 'Legacy' },
    { id: 31, brand: 'Chevrolet', model: 'Corvette' },
    { id: 32, brand: 'Bentley', model: 'Arnage' },
    { id: 33, brand: 'Pontiac', model: 'Bonneville' },
    { id: 34, brand: 'Mitsubishi', model: 'Raider' },
    { id: 35, brand: 'GMC', model: 'Savana 2500' },
    { id: 36, brand: 'Buick', model: 'LeSabre' },
    { id: 37, brand: 'Audi', model: 'A6' },
    { id: 38, brand: 'Ford', model: 'C-MAX Hybrid' },
    { id: 39, brand: 'Chevrolet', model: 'Colorado' },
    { id: 40, brand: 'Ford', model: 'Thunderbird' },
    { id: 41, brand: 'Toyota', model: 'Sienna' },
    { id: 42, brand: 'Lexus', model: 'LS' },
    { id: 43, brand: 'Mitsubishi', model: 'Galant' },
    { id: 44, brand: 'Jeep', model: 'Wrangler' },
    { id: 45, brand: 'Audi', model: 'Allroad' },
    { id: 46, brand: 'Chevrolet', model: 'Express 2500' },
    { id: 47, brand: 'Mercury', model: 'Cougar' },
    { id: 48, brand: 'GMC', model: 'Savana 1500' },
    { id: 49, brand: 'Mercedes-Benz', model: 'S-Class' },
    { id: 50, brand: 'Chevrolet', model: 'Express 1500' },
    { id: 51, brand: 'Dodge', model: 'Magnum' },
    { id: 52, brand: 'Cadillac', model: 'DeVille' },
    { id: 53, brand: 'Lincoln', model: 'Town Car' },
    { id: 54, brand: 'Lexus', model: 'GX' },
    { id: 55, brand: 'Infiniti', model: 'EX' },
    { id: 56, brand: 'Ford', model: 'E250' },
    { id: 57, brand: 'Chevrolet', model: 'Suburban 2500' },
    { id: 58, brand: 'Mercury', model: 'Tracer' },
    { id: 59, brand: 'Hummer', model: 'H1' },
    { id: 60, brand: 'Volvo', model: 'V50' },
    { id: 61, brand: 'Maserati', model: 'Gran Sport' },
    { id: 62, brand: 'Ford', model: 'Focus' },
    { id: 63, brand: 'Toyota', model: 'Camry Hybrid' },
    { id: 64, brand: 'Lincoln', model: 'Town Car' },
    { id: 65, brand: 'Ford', model: 'Explorer' },
    { id: 66, brand: 'Ford', model: 'Bronco II' },
    { id: 67, brand: 'Mercedes-Benz', model: 'G-Class' },
    { id: 68, brand: 'Subaru', model: 'Legacy' },
    { id: 69, brand: 'MINI', model: 'Cooper' },
    { id: 70, brand: 'Porsche', model: '911' },
    { id: 71, brand: 'Volkswagen', model: 'Passat' },
    { id: 72, brand: 'Nissan', model: 'Maxima' },
    { id: 73, brand: 'Honda', model: 'CR-V' },
    { id: 74, brand: 'Volkswagen', model: 'Passat' },
    { id: 75, brand: 'Mitsubishi', model: 'Truck' },
    { id: 76, brand: 'Lincoln', model: 'Mark VII' },
    { id: 77, brand: 'Chevrolet', model: 'Aveo' },
    { id: 78, brand: 'McLaren', model: 'MP4-12C' },
    { id: 79, brand: 'Kia', model: 'Spectra' },
    { id: 80, brand: 'Subaru', model: 'Brat' },
    { id: 81, brand: 'Chevrolet', model: 'Lumina' },
    { id: 82, brand: 'Ford', model: 'LTD Crown Victoria' },
    { id: 83, brand: 'Lincoln', model: 'Continental' },
    { id: 84, brand: 'BMW', model: 'X3' },
    { id: 85, brand: 'Mercury', model: 'Grand Marquis' },
    { id: 86, brand: 'Mercedes-Benz', model: 'C-Class' },
    { id: 87, brand: 'Mazda', model: 'Mazdaspeed 3' },
    { id: 88, brand: 'Mitsubishi', model: 'Starion' },
    { id: 89, brand: 'Acura', model: 'MDX' },
    { id: 90, brand: 'Chevrolet', model: 'Suburban' },
    { id: 91, brand: 'Mercedes-Benz', model: 'G-Class' },
    { id: 92, brand: 'Chevrolet', model: 'Silverado 3500' },
    { id: 93, brand: 'Jaguar', model: 'S-Type' },
    { id: 94, brand: 'Mitsubishi', model: 'Montero Sport' },
    { id: 95, brand: 'Nissan', model: '240SX' },
    { id: 96, brand: 'Suzuki', model: 'Vitara' },
    { id: 97, brand: 'Nissan', model: 'GT-R' },
    { id: 98, brand: 'Lamborghini', model: 'Murciélago' },
    { id: 99, brand: 'Mazda', model: 'B-Series' },
    { id: 100, brand: 'Dodge', model: 'Durango' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id: '${id}' not found.`);

    return car;
  }
}