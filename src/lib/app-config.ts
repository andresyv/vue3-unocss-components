import { nanoid } from "nanoid";
export default {
  appTitle: "Freya ui 🍃",
  users: [
    {
      id: nanoid(),
      name: "John Doe",
      email: "john@mail.com",
      avatar:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c1/c155cb4a8121fd7b2a1298c923e242aed793a7d7.jpg",
    },
    {
      id: nanoid(),
      name: "Hillary Morgan",
      email: "hmorgan@mail.com",
      avatar:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/57/57b2ba1e75da7de33efdea1629ed964a8f0a9e64.jpg",
    },
    {
      id: nanoid(),
      name: "Steve Smith",
      email: "thestevemaster@mail.com",
      avatar:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9b/9b6a868f5e764b94daa60b0d5a818c3a116298d6.jpg",
    },
  ],
};
