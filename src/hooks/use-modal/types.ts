import React from 'react'

export interface BaseModalResultType<T> {
  isSuccess: boolean
  data: T
}

export interface BaseModalProps<T = any> {
  close?: (data: T) => void
}

export type ModalProps = Omit<Record<string, any>, 'close'>

export type ModalType<RT, PT extends ModalProps> = React.FC<
  PT & BaseModalProps<RT>
>

export type ModalElementType = React.ReactElement
