export const createJsonResponse = <T>(
  data: T,
  status: number = 200,
): JsonResponse<T> => ({
  status,
  data,
})

export interface JsonResponse<T> {
  status: number
  data: T
}
