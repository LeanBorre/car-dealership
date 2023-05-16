import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Dodge', model: 'Durango' },
    { id: uuid(), brand: 'Pontiac', model: 'Trans Sport' },
    { id: uuid(), brand: 'Mercury', model: 'Capri' },
    { id: uuid(), brand: 'Chevrolet', model: 'Astro' },
    { id: uuid(), brand: 'Subaru', model: 'Loyale' },
    { id: uuid(), brand: 'GMC', model: 'Yukon XL 1500' },
    { id: uuid(), brand: 'Chrysler', model: 'Prowler' },
    { id: uuid(), brand: 'Chevrolet', model: 'Corvette' },
    { id: uuid(), brand: 'Ford', model: 'Mustang' },
    { id: uuid(), brand: 'Volvo', model: 'C30' },
    { id: uuid(), brand: 'GMC', model: 'Sierra 3500' },
    { id: uuid(), brand: 'Chevrolet', model: 'Suburban 1500' },
    { id: uuid(), brand: 'Ram', model: '3500' },
    { id: uuid(), brand: 'Honda', model: 'S2000' },
    { id: uuid(), brand: 'Eagle', model: 'Summit' },
    { id: uuid(), brand: 'Ford', model: 'F350' },
    { id: uuid(), brand: 'Ram', model: '3500' },
    { id: uuid(), brand: 'Eagle', model: 'Summit' },
    { id: uuid(), brand: 'Mercedes-Benz', model: 'SLK55 AMG' },
    { id: uuid(), brand: 'Jeep', model: 'Wrangler' },
    { id: uuid(), brand: 'Chevrolet', model: 'Venture' },
    { id: uuid(), brand: 'Subaru', model: 'SVX' },
    { id: uuid(), brand: 'Lamborghini', model: 'Diablo' },
    { id: uuid(), brand: 'Scion', model: 'xA' },
    { id: uuid(), brand: 'Nissan', model: 'Xterra' },
    { id: uuid(), brand: 'Toyota', model: 'Paseo' },
    { id: uuid(), brand: 'GMC', model: 'Suburban 1500' },
    { id: uuid(), brand: 'Lexus', model: 'LS' },
    { id: uuid(), brand: 'Porsche', model: 'Boxster' },
    { id: uuid(), brand: 'Subaru', model: 'Legacy' },
    { id: uuid(), brand: 'Chevrolet', model: 'Corvette' },
    { id: uuid(), brand: 'Bentley', model: 'Arnage' },
    { id: uuid(), brand: 'Pontiac', model: 'Bonneville' },
    { id: uuid(), brand: 'Mitsubishi', model: 'Raider' },
    { id: uuid(), brand: 'GMC', model: 'Savana 2500' },
    { id: uuid(), brand: 'Buick', model: 'LeSabre' },
    { id: uuid(), brand: 'Audi', model: 'A6' },
    { id: uuid(), brand: 'Ford', model: 'C-MAX Hybrid' },
    { id: uuid(), brand: 'Chevrolet', model: 'Colorado' },
    { id: uuid(), brand: 'Ford', model: 'Thunderbird' },
    { id: uuid(), brand: 'Toyota', model: 'Sienna' },
    { id: uuid(), brand: 'Lexus', model: 'LS' },
    { id: uuid(), brand: 'Mitsubishi', model: 'Galant' },
    { id: uuid(), brand: 'Jeep', model: 'Wrangler' },
    { id: uuid(), brand: 'Audi', model: 'Allroad' },
    { id: uuid(), brand: 'Chevrolet', model: 'Express 2500' },
    { id: uuid(), brand: 'Mercury', model: 'Cougar' },
    { id: uuid(), brand: 'GMC', model: 'Savana 1500' },
    { id: uuid(), brand: 'Mercedes-Benz', model: 'S-Class' },
    { id: uuid(), brand: 'Chevrolet', model: 'Express 1500' },
    { id: uuid(), brand: 'Dodge', model: 'Magnum' },
    { id: uuid(), brand: 'Cadillac', model: 'DeVille' },
    { id: uuid(), brand: 'Lincoln', model: 'Town Car' },
    { id: uuid(), brand: 'Lexus', model: 'GX' },
    { id: uuid(), brand: 'Infiniti', model: 'EX' },
    { id: uuid(), brand: 'Ford', model: 'E250' },
    { id: uuid(), brand: 'Chevrolet', model: 'Suburban 2500' },
    { id: uuid(), brand: 'Mercury', model: 'Tracer' },
    { id: uuid(), brand: 'Hummer', model: 'H1' },
    { id: uuid(), brand: 'Volvo', model: 'V50' },
    { id: uuid(), brand: 'Maserati', model: 'Gran Sport' },
    { id: uuid(), brand: 'Ford', model: 'Focus' },
    { id: uuid(), brand: 'Toyota', model: 'Camry Hybrid' },
    { id: uuid(), brand: 'Lincoln', model: 'Town Car' },
    { id: uuid(), brand: 'Ford', model: 'Explorer' },
    { id: uuid(), brand: 'Ford', model: 'Bronco II' },
    { id: uuid(), brand: 'Mercedes-Benz', model: 'G-Class' },
    { id: uuid(), brand: 'Subaru', model: 'Legacy' },
    { id: uuid(), brand: 'MINI', model: 'Cooper' },
    { id: uuid(), brand: 'Porsche', model: '911' },
    { id: uuid(), brand: 'Volkswagen', model: 'Passat' },
    { id: uuid(), brand: 'Nissan', model: 'Maxima' },
    { id: uuid(), brand: 'Honda', model: 'CR-V' },
    { id: uuid(), brand: 'Volkswagen', model: 'Passat' },
    { id: uuid(), brand: 'Mitsubishi', model: 'Truck' },
    { id: uuid(), brand: 'Lincoln', model: 'Mark VII' },
    { id: uuid(), brand: 'Chevrolet', model: 'Aveo' },
    { id: uuid(), brand: 'McLaren', model: 'MP4-12C' },
    { id: uuid(), brand: 'Kia', model: 'Spectra' },
    { id: uuid(), brand: 'Subaru', model: 'Brat' },
    { id: uuid(), brand: 'Chevrolet', model: 'Lumina' },
    { id: uuid(), brand: 'Ford', model: 'LTD Crown Victoria' },
    { id: uuid(), brand: 'Lincoln', model: 'Continental' },
    { id: uuid(), brand: 'BMW', model: 'X3' },
    { id: uuid(), brand: 'Mercury', model: 'Grand Marquis' },
    { id: uuid(), brand: 'Mercedes-Benz', model: 'C-Class' },
    { id: uuid(), brand: 'Mazda', model: 'Mazdaspeed 3' },
    { id: uuid(), brand: 'Mitsubishi', model: 'Starion' },
    { id: uuid(), brand: 'Acura', model: 'MDX' },
    { id: uuid(), brand: 'Chevrolet', model: 'Suburban' },
    { id: uuid(), brand: 'Mercedes-Benz', model: 'G-Class' },
    { id: uuid(), brand: 'Chevrolet', model: 'Silverado 3500' },
    { id: uuid(), brand: 'Jaguar', model: 'S-Type' },
    { id: uuid(), brand: 'Mitsubishi', model: 'Montero Sport' },
    { id: uuid(), brand: 'Nissan', model: '240SX' },
    { id: uuid(), brand: 'Suzuki', model: 'Vitara' },
    { id: uuid(), brand: 'Nissan', model: 'GT-R' },
    { id: uuid(), brand: 'Lamborghini', model: 'Murciélago' },
    { id: uuid(), brand: 'Mazda', model: 'B-Series' },
    { id: uuid(), brand: 'Dodge', model: 'Durango' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      console.log('vino por aca');
      throw new NotFoundException(`Car with id: '${id}' not found.`);
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = { id: uuid(), ...createCarDto };
    this.cars.unshift(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carToUpdate = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carToUpdate = { ...carToUpdate, ...updateCarDto, id };
        return carToUpdate;
      }
      return car;
    });
    return carToUpdate;
  }

  delete(id: string) {
    const carToDelete = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return carToDelete;
  }
}
