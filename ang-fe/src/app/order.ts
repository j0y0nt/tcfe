export class Order {
    constructor(
        //Long id,
        public name: string, 
        public street: string, 
        public city: string, 
        public state: string, 
        public zip: string, 
        public ccNumber: string, 
        public ccExpiration: string, 
        public ccCvv: string, 
        public tacoId?: number,
        public id?: number,
      ) {}
}
