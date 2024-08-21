/**
 * This utility function is extracted to make it easier to find places where we are doing
 * specific timing tricks to try to schedule work after React has rendered. This is especially
 * import at the moment because Next.js uses the edge builds of React which use setTimeout to
 * schedule work when you might expect that something like setImmediate would do the trick.
 *
 * Long term we should switch to the node versions of React rendering when possible and then
 * update this to use setImmediate rather than setTimeout
 *
 * A shorter term work around would be to patch React to use setImmediate instead of setTimeout
 * in the edge builds since this might also avoid setTimeout throttling.
 */
export async function waitAtLeastOneReactRenderTask(
  url?: string,
  tag?: string
) {
  // @ts-ignore
  console.log(url, 'schedule one task', tag, setTimeout === setImmediate)
  if (url && tag) {
    return new Promise((r) => {
      setTimeout(() => {
        console.log(url, 'execute one task', tag)
        // @ts-ignore
        r()
      })
    })
  }
  return new Promise((r) => setTimeout(r, 0))
  // console.log(url, 'schedule one task', tag)
  // if (url && tag) {
  //   return new Promise((r) => {
  //     setImmediate(() => {
  //       console.log(url, 'execute one task', tag)
  //       // @ts-ignore
  //       r()
  //     })
  //   })
  // }
  // return new Promise((r) => setImmediate(r))
}
