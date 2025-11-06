# T8ngs OpenAPI 

Plugin de asserções OpenAPI para o ecossistema T8ngs. Valide respostas HTTP dos seus testes contra um ou mais documentos OpenAPI.

> Este projeto é baseado no trabalho original do pacote `@japa/openapi-assertions`.

## Requisitos

- Node.js >= 20.6
- `@japa/runner`

## Instalação

Ou instale diretamente deste repositório:

```sh
npm i -D github:t8ngs/openapi

yarn add -D github:t8ngs/openapi
```

## Uso

```ts
import { configure } from '@t8ngs/runner'
import { openapi } from '@t8ngs/openapi'

configure({
	plugins: [
		openapi({
			schemas: [new URL('./tests/fixtures/api-spec.json', import.meta.url)],
			reportCoverage: true,
			exportCoverage: false,
		}),
	],
})
```

Nos testes:

```ts
import supertest from 'supertest'

test('listar usuários', async ({ assert }) => {
	const response = await supertest('http://localhost:3333').get('/users')
	assert.isValidApiResponse(response)
})
```

### Opções

- `schemas: (string | URL)[]` (obrigatório)
- `reportCoverage?: boolean`
- `exportCoverage?: boolean`

## Contribuição

Issues e PRs são bem-vindos em https://github.com/t8ngs/openapi.

## Licença

MIT — veja [LICENSE.md](./LICENSE.md).
