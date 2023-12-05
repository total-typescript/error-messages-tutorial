interface Dog {
  bark: boolean;
}

let cat = { purr: true };

let dog = cat as unknown as Dog;
