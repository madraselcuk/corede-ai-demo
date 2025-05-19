export interface IGraphqlVariables<TVariable = undefined, TFilter = undefined> {
  filter?: TFilter;
  input?: TVariable;
}

export interface IBaseGraphqlRequest<
  TVariable = undefined,
  TFilter = undefined,
> {
  query: string;
  variables?: IGraphqlVariables<TVariable, TFilter>;
}
