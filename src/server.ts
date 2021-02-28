import { createServer } from 'miragejs';
import { filters, items } from './data.json';

createServer({
  routes() {
    this.get('/api/results', () => ({ filters, items }));
  },
});
