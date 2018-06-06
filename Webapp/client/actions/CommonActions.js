export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const OPEN_SNACKBAR = "OPEN_SNACKBAR";

export function openSnackbar(text) {
  return {
    type: OPEN_SNACKBAR,
    text
  }
}

export function closeSnackbar() {
  return {
    type: CLOSE_SNACKBAR
  }
}