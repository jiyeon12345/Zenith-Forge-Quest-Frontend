import customBreakpoints from '@/styles/breakpoints'
import theme from '@/styles/theme'
import { Box, BoxProps as MuiBoxProps } from '@mui/material'

//* 수정해야한다, .mobile이 MUI에서 안먹는중 - 성빈 -
type T_HiddenBoxProps = {
  className?: string
  component?: string
  children: React.ReactNode
} & MuiBoxProps

export function MobileHidden({ children, className, component }: T_HiddenBoxProps) {
  return (
    <Box
      className={className}
      component={component}
      sx={{
        display: {
          [theme.breakpoints.down('md')]: 'none',
          [theme.breakpoints.between('sm', 'md')]: 'block',
          [theme.breakpoints.between('md', 'lg')]: 'block',
          [theme.breakpoints.up('lg')]: 'block',
        },
      }}
    >
      {children}
    </Box>
  )
}

export function TabletHidden({ children, className, component }: T_HiddenBoxProps) {
  return (
    <Box
      className={className}
      component={component}
      sx={{
        display: {
          [theme.breakpoints.down('md')]: 'none',
          [theme.breakpoints.between('sm', 'md')]: 'none',
          [theme.breakpoints.between('md', 'lg')]: 'block',
          [theme.breakpoints.up('lg')]: 'block',
        },
      }}
    >
      {children}
    </Box>
  )
}

export function LaptopHidden({ children, className, component }: T_HiddenBoxProps) {
  return (
    <Box
      className={className}
      component={component}
      sx={{
        display: {
          [customBreakpoints.mobile]: 'block',
          [customBreakpoints.tablet]: 'block',
          [customBreakpoints.laptop]: 'none',
          [customBreakpoints.desktop]: 'block',
        },
      }}
    >
      {children}
    </Box>
  )
}

export function DesktopHidden({ children, className, component }: T_HiddenBoxProps) {
  return (
    <Box
      className={className}
      component={component}
      sx={{
        display: {
          [customBreakpoints.mobile]: 'block',
          [customBreakpoints.tablet]: 'block',
          [customBreakpoints.laptop]: 'block',
          [customBreakpoints.desktop]: 'none',
        },
      }}
    >
      {children}
    </Box>
  )
}
