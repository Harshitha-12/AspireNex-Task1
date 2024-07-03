const projectPreviews = [
  {
    imageSrc: "/images/projects/bstore/4.png",
    imageText: "BenCalc Screenshot",
    name: "BStore",
    viewLink: "/projects#bstore",
    descriptionContent: (
      <p className="text-sm font-light">
        BStore is an online store, where users find products and services, It comes with an administrator&apos;s
        dashboard for creating, deleting, updating posts basically it performs CRUD operations. Users can also sign up
        as a seller and sell products to other users. <br />
        <br />
        It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase online.
      </p>
    ),
    techStack: ["NextJs", "Mongoose", "MongoDB", "Stripe", "TailwindCSS"],
    duration: "Jun 2023 - Date",
  },
];

export default projectPreviews;
