import * as yup from "yup";

export const yupFormValidator = new yup.ObjectSchema({
  title: yup.string().min(3, "Title must be at least 3 characters"),
  description: yup.string().min(3, "Description must be at least 3 characters"),
  location: yup
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(400, "Location must be less than 400 characters"),
  imageUrl: yup.string(),
  startDateTime: yup.date(),
  endDateTime: yup.date(),
  category: yup.string(),
  price: yup.string(),
  isFree: yup.boolean(),
  url: yup.string().url(),
});
