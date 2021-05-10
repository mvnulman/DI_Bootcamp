let arr = ['eli', 'sharon', 'john']


arr.forEach ( (item, i, array) => {
array[i] = arr[i] + `@gmail.com`
// arr[i] = array[i] *Don't needed this part
})

console.log(arr)