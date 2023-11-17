import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  backgroundImg: Yup.string()
    .url("must be url")
    .required("please fill this field"),
  cardImg: Yup.string().url("must be a url").required("please fill this field"),
  description: Yup.string().min(10).max(25).required("please fill this field"),
  subTitle: Yup.string().min(10).max(25).required("please fill this field"),
  title: Yup.string().min(4).max(10).required("please fill this field"),
  titleImg: Yup.string()
    .url("must be a url")
    .required("please fill this field"),
  type: Yup.string().required("please select a type"),
});
