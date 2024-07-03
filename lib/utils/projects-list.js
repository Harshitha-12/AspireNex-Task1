export const projects = [
  {
    name: "Harstore",
    description: `Harstore is an online store, where users find products and services, It comes with an administrator's dashboard for creating, deleting, updating posts basically it can perform CRUD operations.
    Regular users can also sign up as a seller and sell products to customers.

    It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase online.
    `,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((img) => `/images/projects/Harstore/${img}.png`),
    alt_attr: "Harstore Illustration",
    id: "Harstore",
    techs: ["NextJs", "MongoDB", "NodeJs", "TailwindCSS"],
    github_repo: "https://github.com/Harshitha-12/AspireNex",
    live_: {
      url: "https://aspire-nex-har-ecom-store-git-main-harshitha-12s-projects.vercel.app/",
      name: "Harstore",
    },
  },
];