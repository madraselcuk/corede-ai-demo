/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react'
import { EntityDeleteDialog } from '@/components/organisms/entity-delete/entity-delete.dialog'
import { notifyOnError } from '../query-result-toast/notify-on-error'
import { notifyOnSuccess } from '../query-result-toast/notify-on-success'
import { BaseQueryFn, TypedUseMutation } from '@reduxjs/toolkit/query/react'
import { IBaseResult, IEntity, IGraphqlVariables } from '@common_package'

interface EntityDeleteProps {
  entityId?: string
  entityName?: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  successMessage?: string
  onError?: () => void
  errorMessage?: string
  /**
   * this is the mutation hook that will be used to delete the entity
   */
  useEntityDeleteMutation: TypedUseMutation<
    IBaseResult,
    IGraphqlVariables<IEntity>,
    BaseQueryFn
  >
}

export function EntityDelete({
  entityId,
  entityName,
  isOpen,
  onClose,
  onSuccess,
  successMessage,
  onError,
  errorMessage,
  useEntityDeleteMutation,
}: EntityDeleteProps) {
  const [deleteMutation, { data: result, isLoading, error, reset }] =
    useEntityDeleteMutation()

  const handleDelete = useCallback(async () => {
    if (!entityId) return

    try {
      await deleteMutation({ input: { _id: entityId } })
    } catch (error) {
      console.error(error)
    }
  }, [entityId, deleteMutation])

  useEffect(() => {
    if (result) {
      notifyOnSuccess({
        entity: entityName,
        message: successMessage,
      })
      reset()
      onSuccess?.()
      onClose()
    }
  }, [result, entityName, successMessage, onSuccess])

  useEffect(() => {
    if (error) {
      onError?.()
      notifyOnError({
        entity: entityName,
        message: errorMessage,
        error,
      })
      // this is needed so that error state will be reset,
      // otherwise when this useEffect is triggered , error will not be empty and error notification will be sent
      reset()
    }
  }, [error, onError, errorMessage, entityName])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
