import * as Yup from "yup";

const regx = {
  name: /^[а-яА-Яa-zA-Z]{2,20}$/,
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(regx.name, "Кириллица или латиница (2-20 символов)")
    .required("Обязательное поле"),
  company: Yup.string()
    .matches(regx.name, "Кириллица или латиница (2-20 символов)")
    .required("Обязательное поле"),
  message: Yup.string().max(150, "Максимум 150 символов"),
  number: Yup.string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Введите корректный номер")
    .required("Введите номер телефона"),
});

export const initialValues = {
  name: "",
  company: "",
  number: "",
  message: "",
  check: false,
};
