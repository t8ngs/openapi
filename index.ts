/*
 * @t8ngs/openapi-assertions
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Assert } from '@t8ngs/assert'
import type { PluginFn } from '@t8ngs/runner/types'
import type { PluginConfig } from './src/types.js'
import { OpenApiAssertions } from './src/openapi_assertions.js'

declare module '@t8ngs/assert' {
  export interface Assert {
    isValidApiResponse: (response: any) => void
  }
}

/**
 * Plugin for "@t8ngs/runner"
 */
export function openapi(options: PluginConfig): PluginFn {
  OpenApiAssertions.registerSpecs(options.schemas, {
    exportCoverage: options.exportCoverage,
    reportCoverage: options.reportCoverage,
  })
  return function () {
    Assert.macro('isValidApiResponse', (response) =>
      new OpenApiAssertions().isValidResponse(response)
    )
  }
}

export { OpenApiAssertions }
