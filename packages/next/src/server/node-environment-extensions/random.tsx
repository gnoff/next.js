/**
 * We extend Math.random() during builds and revalidates to ensure that prerenders don't observe randomness
 * When dynamicIO is enabled. randomness is a form of IO even though it resolves synchronously. When dyanmicIO is
 * enabled we need to ensure that randomness is excluded from prerenders.
 *
 * The extensions here never error nor alter the random generation itself and thus should be transparent to callers.
 */

import { workAsyncStorage } from '../../client/components/work-async-storage.external'
import {
  isDynamicIOPrerender,
  prerenderAsyncStorage,
} from '../app-render/prerender-async-storage.external'
import { abortOnSynchronousDynamicDataAccess } from '../app-render/dynamic-rendering'

console.log('==== loading random extension')

const originalRandom = Math.random

Math.random = function () {
  const workStore = workAsyncStorage.getStore()
  console.log('workStore', workStore && workStore.route)
  if (workStore) {
    const prerenderStore = prerenderAsyncStorage.getStore()
    console.log(workStore.route, 'prerenderStore', prerenderStore)
    if (
      prerenderStore &&
      prerenderStore.type === 'prerender' &&
      isDynamicIOPrerender(prerenderStore)
    ) {
      console.log(workStore.route, 'dynamicIO prerender')
      abortOnSynchronousDynamicDataAccess(
        workStore.route,
        '`Math.random()`',
        prerenderStore
      )
    }
  }

  return originalRandom.apply(this, arguments as any)
}
