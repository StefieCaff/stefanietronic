import fold1 from "./fold1.jpg"
import fold2 from "./fold2.jpg";
import fold3 from "./fold3.jpg";
import fold4 from "./fold4.jpg";
import fold5 from "./fold5.jpg";

const errorImages = [
  {
    src: fold1,
    alt: "fold 1",
    caption: "Fold the paper in half length-wise.",
  },
  {
    src: fold2,
    alt: "fold 2",
    caption: "Unfold and then fold the corners into the center line.",
  },
  {
    src: fold3,
    alt: "fold 3",
    caption: "Fold the top edges to the center.",
  },
  {
    src: fold4,
    alt: "penultimate fold",
    caption: "Refold the paper in half length-wise. ",
  },
  {
    src: fold5,
    alt: "final fold",
    caption: "Fold the wings down to meet the bottom edge of the planes body.",
  },
];

export { errorImages };