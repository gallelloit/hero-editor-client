import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', superpowers: [{name: "Fly"}, {name: 'Superstrength'}] },
      { id: 12, name: 'Narco', superpowers: [{name: "Fly"}] },
      { id: 13, name: 'Bombasto', superpowers: [{name: "Fly"}, {name: 'Superstrength'}] },
      { id: 14, name: 'Celeritas', superpowers: [{name: "Fly"}]},
      { id: 15, name: 'Magneta', superpowers: [{name: "Fly"}, {name: 'Superstrength'}] },
      { id: 16, name: 'RubberMan', superpowers: [{name: "Fly"}, {name: 'Superstrength'}] },
      { id: 17, name: 'Dynama', superpowers: [{name: "Fly"}] },
      { id: 18, name: 'Dr IQ', superpowers: [{name: "Fly"}, {name: 'Superstrength'}] },
      { id: 19, name: 'Magma', superpowers: [] },
      { id: 20, name: 'Tornado', superpowers: [{name: "Fly"}, {name: 'Superstrength'}] }
    ];
    return {heroes};
  }
}
