import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', superpowers: [{id: 1, name: "Fly"}, {id: 2, name: 'Superstrength'}] },
      { id: 12, name: 'Narco', superpowers: [{id: 1, name: "Fly"}] },
      { id: 13, name: 'Bombasto', superpowers: [{id: 1, name: "Fly"}, {id: 2, name: 'Superstrength'}] },
      { id: 14, name: 'Celeritas', superpowers: [{id: 1, name: "Fly"}]},
      { id: 15, name: 'Magneta', superpowers: [{id: 1, name: "Fly"}, {id: 2, name: 'Superstrength'}] },
      { id: 16, name: 'RubberMan', superpowers: [{id: 1, name: "Fly"}, {id: 2, name: 'Superstrength'}] },
      { id: 17, name: 'Dynama', superpowers: [{id: 1, name: "Fly"}] },
      { id: 18, name: 'Dr IQ', superpowers: [{id: 1, name: "Fly"}, {id: 2, name: 'Superstrength'}] },
      { id: 19, name: 'Magma', superpowers: [] },
      { id: 20, name: 'Tornado', superpowers: [{id: 1, name: "Fly"}, {id: 2, name: 'Superstrength'}] }
    ];
    return {heroes};
  }
}
