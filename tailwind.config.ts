import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#005679',
          surfaceTint: '#18658A',
          onPrimary: '#FFFFFF',
          primaryContainer: '#377BA2',
          onPrimaryContainer: '#FFFFFF',
          secondary: '#4B6171',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#CFE7FA',
          onSecondaryContainer: '#354B5B',
          tertiary: '#684178',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#8F659F',
          onTertiaryContainer: '#FFFFFF',
          error: '#BA1A1A',
          onError: '#FFFFFF',
          errorContainer: '#FFDAD6',
          onErrorContainer: '#410002',
          background: '#F8F9FD',
          onBackground: '#191C1F',
          surface: '#F8F9FD',
          onSurface: '#191C1F',
          surfaceVariant: '#DCE3EB',
          onSurfaceVariant: '#40484E',
          outline: '#70787F',
          outlineVariant: '#C0C7CF',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#2E3133',
          inverseOnSurface: '#EFF1F4',
          inversePrimary: '#8ECEF9',
          primaryFixed: '#C7E7FF',
          onPrimaryFixed: '#001E2E',
          primaryFixedDim: '#8ECEF9',
          onPrimaryFixedVariant: '#004C6C',
          secondaryFixed: '#CEE6F9',
          onSecondaryFixed: '#041E2C',
          secondaryFixedDim: '#B2CADC',
          onSecondaryFixedVariant: '#334959',
          tertiaryFixed: '#F8D8FF',
          onTertiaryFixed: '#2E083F',
          tertiaryFixedDim: '#E5B6F6',
          onTertiaryFixedVariant: '#5E376E',
          surfaceDim: '#D8DADD',
          surfaceBright: '#F8F9FD',
          surfaceContainerLowest: '#FFFFFF',
          surfaceContainerLow: '#F2F4F7',
          surfaceContainer: '#ECEEF1',
          surfaceContainerHigh: '#E6E8EC',
          surfaceContainerHighest: '#E1E2E6'
        },
        dark: {
          primary: '#8ECEF9',
          surfaceTint: '#8ECEF9',
          onPrimary: '#00344C',
          primaryContainer: '#2D7399',
          onPrimaryContainer: '#FFFFFF',
          secondary: '#B2CADC',
          onSecondary: '#1C3341',
          secondaryContainer: '#293F4E',
          onSecondaryContainer: '#BCD3E6',
          tertiary: '#E5B6F6',
          onTertiary: '#452055',
          tertiaryContainer: '#885F98',
          onTertiaryContainer: '#FFFFFF',
          error: '#FFB4AB',
          onError: '#690005',
          errorContainer: '#93000A',
          onErrorContainer: '#FFDAD6',
          background: '#111416',
          onBackground: '#E1E2E6',
          surface: '#111416',
          onSurface: '#E1E2E6',
          surfaceVariant: '#40484E',
          onSurfaceVariant: '#C0C7CF',
          outline: '#8A9298',
          outlineVariant: '#40484E',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#E1E2E6',
          inverseOnSurface: '#2E3133',
          inversePrimary: '#18658A',
          primaryFixed: '#C7E7FF',
          onPrimaryFixed: '#001E2E',
          primaryFixedDim: '#8ECEF9',
          onPrimaryFixedVariant: '#004C6C',
          secondaryFixed: '#CEE6F9',
          onSecondaryFixed: '#041E2C',
          secondaryFixedDim: '#B2CADC',
          onSecondaryFixedVariant: '#334959',
          tertiaryFixed: '#F8D8FF',
          onTertiaryFixed: '#2E083F',
          tertiaryFixedDim: '#E5B6F6',
          onTertiaryFixedVariant: '#5E376E',
          surfaceDim: '#111416',
          surfaceBright: '#36393C',
          surfaceContainerLowest: '#0B0F11',
          surfaceContainerLow: '#191C1F',
          surfaceContainer: '#1D2023',
          surfaceContainerHigh: '#272A2D',
          surfaceContainerHighest: '#323538'
        }
      }
    }
  },
  plugins: []
}
export default config
