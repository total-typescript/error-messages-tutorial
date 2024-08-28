const createRoutes = (config: {
  routes: {
    path: string;
    component: string | number;
  }[];
}) => {};

createRoutes({
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
});
