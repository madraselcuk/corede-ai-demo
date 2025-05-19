import { IBaseGraphqlError } from "../error/base-graphql-error";
import { IBaseGraphqlRequest } from "../request/base-request.interface";

export interface IBaseGraphqlResponse<TInput = any> {
  errors?: TGraphqlErrors<TInput>;
  data?: {
    [key: string]: any;
  };
}

export type TGraphqlErrors<TInput> = Array<IGraphQLFormattedError<TInput>>;

export interface IGraphQLFormattedError<TInput = any> {
  readonly message: string;
  locations?: ReadonlyArray<ISourceLocation>;
  path?: ReadonlyArray<string | number>;
  extensions?: {
    [key: string]: unknown;
    custom?: IBaseGraphqlError;
    args?: IBaseGraphqlRequest<TInput>; // TODO: check the interface: it can be IGraphqlVariables<TVariable, TFilter>
  };
}

export interface ISourceLocation {
  readonly line: number;
  readonly column: number;
}
