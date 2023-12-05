interface UserProfile {
  id: string;

  preferences: {
    theme: "light" | "dark";
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "blue",
  },
};
