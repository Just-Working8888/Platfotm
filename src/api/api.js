import axios from "axios";
import {
  setFetching,
  setUser,
  setError,
  setAuthenticated,
  clearErrors,
} from "../redux/register/RegisterSlice";

export function registerUser(formData,setLoading) {
  const handleRouteChange = () => {
    window.location.href = "/";
  };
  return (dispatch) => {
    setLoading(true)
    dispatch(setFetching(true)); // Устанавливаем isFetching в true
    dispatch(clearErrors()); // Очищаем ошибки перед отправкой запроса
    axios
      .post("https://orozkg.pythonanywhere.com/api/v1/auth/register/", formData)
      .then((response) => {
        // Успешный ответ от сервера
        console.log("Registration successful:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(setUser(response.data));
        dispatch(setAuthenticated(true));
        handleRouteChange()
        setLoading(false)
        // Добавьте дополнительные действия или обновление состояния в Redux, если необходимо
      })
      .catch((error) => {
        // Ошибка при отправке запроса или ответ с ошибкой от сервера
        console.error("Registration error:", error);
        dispatch(setError(error.response?.data || {}));
        setLoading(false)
        // Добавьте дополнительные действия или обновление состояния в Redux для обработки ошибок
      })
      .finally(() => {
        setLoading(false)
        dispatch(setFetching(false)); // Устанавливаем isFetching в false
      });
  };
}
