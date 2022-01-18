import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const ToolsSettings = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'ToolsSettings',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M11.835 15l5 5c.828.828 2.172.828 3 0v0c.828-.828.828-2.172 0-3l-5-5"></path>
        <path d="M20.916 5.847c.024.023.042.053.051.085 .47 1.567.106 3.33-1.132 4.568 -1.251 1.251-3.038 1.609-4.617 1.117l-8.347 8.347c-.813.813-2.139.874-2.98.09 -.884-.823-.902-2.207-.056-3.054l8.383-8.383c-.492-1.579-.134-3.366 1.117-4.617 1.238-1.238 3.001-1.602 4.568-1.132 .032.01.062.027.085.051l.162.162c.078.078.078.205 0 .283l-2.635 2.636 2.32 2.32 2.636-2.636c.078-.078.205-.078.283 0l.162.163Z"></path>
        <path d="M2.933 4.293l.674 2.023c.136.409.518.684.949.684h2.279v-2.279c0-.43-.275-.813-.684-.949l-2.023-.674c-.18-.06-.378-.013-.512.121l-.562.562c-.134.134-.181.332-.121.512Z"></path>
        <path d="M6.84 7l3.5 3.5"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24Z"></path>
    </>
  ),
})

export default memo(ToolsSettings)
