import { ApiError } from "./types/ApiError"

export const getError = (error: ApiError) => {
    return error.response && error.response.data.messafe
      ? error.response.data.messafe
      : error.message
  }