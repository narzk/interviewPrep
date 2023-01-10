const promiseAll = (iterables) => {
  let results = []
  new Promise((resolve, reject) => {
    iterables.forEach(async (item) => {
      try {
        const result = await item
        results.push(result)
        resolve(results)
      } catch (err) {
        reject(err)
      }
    })
  })
}
