export default async (delayTime: number = 500) => {
  return await new Promise((r) => setTimeout(r, delayTime))
}
