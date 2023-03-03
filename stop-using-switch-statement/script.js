// const extension = '.css'
// let contentType
// switch (extension) {
//   case '.css':
//     contentType = 'text/css'
//     break
//   case '.js':
//     contentType = 'text/javascript'
//     break
//   case '.json':
//     contentType = 'application/json'
//     break
//   case '.jpg':
//     contentType = 'image/jpeg'
//     break
//   case '.png':
//     contentType = 'image/png'
//     break
//   case '.txt':
//     contentType = 'text/plain'
//     break
//   default:
//     contentType = 'text/html'
// }

// console.log(contentType)
// // -------------------------------------------------------------------------

// const extension = '.txt'
// const extensionObj = {
//   '.css': 'text/css',
//   '.js': 'text/javascript',
//   '.json': 'application/json',
//   '.jpg': 'image/jpeg',
//   '.png': 'image/png',
//   '.txt': 'text/plain',
// }

// const contentType = extensionObj[extension] || 'text/html'
// console.log(contentType)

// -------------------------------------------------------------------------

const extension = '.png'
const myMAp = new Map()
myMAp.set('.css', 'text/css')
myMAp.set('.js', 'text/javascript')
myMAp.set('.json', 'application/json')
myMAp.set('.jpg', 'image/jpeg')
myMAp.set('.png', 'image/png')
myMAp.set('.txt', 'text/plain')

const contentType = myMAp.get(extension) || 'text/html'
console.log(contentType)
