import Swal from "sweetalert2";
import { getErrorMessage } from "../../Helper/errorMessages";

export const showError = (error) => {
  const message = getErrorMessage(error);
  Swal.fire({
    icon: "error",
    title: message,
    timer: 4000,
  });
};
