interface Dog {
  bark: boolean;
}

let cat = { purr: true };

let dog = cat as any as Dog;
