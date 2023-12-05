interface UserProfile {
  id: string;

  preferences: {
    theme: string;
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "blue",
  },
};
