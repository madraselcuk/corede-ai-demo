export interface SizeVariants {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export interface ShapeVariants {
  circle: string
  square: string
  rounded: string
}

export interface BorderVariants {
  none: string
  solid: string
  dashed: string
  outline: string
  ghost: string
  link: string
  subtle: string
}

// Create interfaces for common variant combinations
export interface HasSizeVariant {
  size?: SizeVariants
}

export interface HasShapeVariant {
  shape?: ShapeVariants
}

export interface HasBorderVariant {
  border?: BorderVariants
}
