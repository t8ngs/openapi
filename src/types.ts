/*
 * @t8ngs/openapi-assert
 *
 * (c) t8ngs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export type PluginConfig = {
  schemas: (string | URL)[]
  reportCoverage?: boolean
  exportCoverage?: boolean
}
