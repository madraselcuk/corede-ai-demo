import { internalServerError, unknownError } from "../../errors";
import { IBaseGraphqlResponse } from "./base-response.interface";

export class BaseGraphqlResponseFactory {
  static defaultInternalServerError(): IBaseGraphqlResponse {
    return {
      errors: [
        {
          message: internalServerError.name,
          extensions: {
            custom: {
              error: internalServerError,
              statusCode: 500,
            },
          },
        },
      ],
      data: undefined,
    };
  }

  static defaultUnknownError(): IBaseGraphqlResponse {
    return {
      errors: [
        {
          message: unknownError.name,
          extensions: {
            custom: {
              error: unknownError,
              statusCode: 500,
            },
          },
        },
      ],
      data: undefined,
    };
  }
}
