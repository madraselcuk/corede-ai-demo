import {
  IProjectListInput,
  IProjectListRequest,
  IProjectListResponse,
  IProjectListResult,
  projectListQuery,
  IProjectDetailInput,
  IProjectDetailRequest,
  IProjectDetailResponse,
  IProjectDetailResult,
  IProjectCreateInput,
  IProjectCreateRequest,
  IProjectCreateResponse,
  IProjectCreateResult,
  projectCreateQuery,
  IProjectUpdateInput,
  IProjectUpdateRequest,
  IProjectUpdateResponse,
  IProjectUpdateResult,
  projectUpdateQuery,
  IProjectUpdateFilterInput,
  projectDeleteQuery,
  IProjectDeleteInput,
  IProjectDeleteRequest,
  IProjectDeleteResponse,
  IProjectDeleteResult,
  projectDetailQuery,
} from '@corede_package'
import { enumValues, IGraphqlVariables } from '@common_package'
import { EndpointQueryBuilder, IApi, injectTags } from '@api_package'
import { EndpointBuilder, BaseQueryFn } from '@reduxjs/toolkit/query'
import { ProjectTags } from './project-tags.enum'
import { ProjectEndpointDefinitions } from './project.api.types'

const projectApiReducerPath = 'projectApi'

export const injectProjectTags = (api: IApi) =>
  injectTags({
    api,
    name: projectApiReducerPath,
    tagTypes: enumValues(ProjectTags),
    options: { registerTagTypes: true },
  })

export const projectEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => ProjectEndpointDefinitions = (builder) => ({
  // queries
  projectList: builder.query<
    IProjectListResult,
    IGraphqlVariables<IProjectListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectListRequest,
      IProjectListResponse,
      IProjectListResult,
      IProjectListInput
    >({
      query: projectListQuery(),
      providesTags: [],
    }),
  ),

  projectDetail: builder.query<
    IProjectDetailResult,
    IGraphqlVariables<IProjectDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectDetailRequest,
      IProjectDetailResponse,
      IProjectDetailResult,
      IProjectDetailInput
    >({
      query: projectDetailQuery(),
      providesTags: [],
    }),
  ),

  // mutation
  projectCreate: builder.mutation<
    IProjectCreateResult,
    IGraphqlVariables<IProjectCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectCreateRequest,
      IProjectCreateResponse,
      IProjectCreateResult,
      IProjectCreateInput
    >({
      query: projectCreateQuery,
      invalidatesTags: [],
    }),
  ),

  projectUpdate: builder.mutation<
    IProjectUpdateResult,
    IGraphqlVariables<IProjectUpdateInput, IProjectUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectUpdateRequest,
      IProjectUpdateResponse,
      IProjectUpdateResult,
      IProjectUpdateInput,
      IProjectUpdateFilterInput
    >({
      query: projectUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  projectDelete: builder.mutation<
    IProjectDeleteResult,
    IGraphqlVariables<IProjectDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectDeleteRequest,
      IProjectDeleteResponse,
      IProjectDeleteResult,
      IProjectDeleteInput
    >({
      query: projectDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
