import type { Component } from 'vue'

export type TRoute = {
  path: string
  name: string
  component: () => Promise<Component>
}
