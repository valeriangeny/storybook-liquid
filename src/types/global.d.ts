// Vue component declarations
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Raw file imports
declare module '*.html?raw' {
  const content: string
  export default content
}

declare module '*.liquid?raw' {
  const content: string
  export default content
}

// Story render function parameter types
declare global {
  interface StoryRenderArgs {
    [key: string]: any
  }
}

export {}