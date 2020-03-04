// trigger('listRow', [
//   state('in', style({
//     opacity: 1,
//     border: '0px solid grey',
//     transform: 'translateX(0px)'
//   })),
//   transition('void <=> *', [
//     style({
//       opacity: 0,
//       border: '10px solid grey',
//       transform: 'translateX(-100px)'
//     }),
//     animate(100)]),
//   transition('* <=> void', [
//     animate(100, style({
//       opacity: 0,
//       border: '10px solid grey',
//       transform: 'translateX(-200px)'
//     }))])
// ]),

// working animations

// animations: [
//   trigger('listRow', [
//     transition('void => *', [
//       style({
//         opacity: 1,
//         border: '10px solid green',
//         transform: 'translateX(-100px)'
//       }),
//       animate(400)]),
//     transition('* => void', [
//       style({
//         opacity: 0,
//         border: '10px solid red',
//         transform: 'translateX(500px)',
//         width: '80%'
//       }),
//       animate(200)])
//   ]),
//   trigger('displayItems', [
//     state('add', style({
//       opacity: 1,
//       border: '2px solid black',
//       transform: 'translateX(-300px)'
//     })),
//     state('delete', style({
//       opacity: 0,
//       border: '0px solid blue',
//       transform: 'translateX(300px)'
//     })),
//     transition('add <=> delete', animate(300,
//       style({
//         opacity: 1,
//         border: '2px solid black',
//         transform: 'translateX(-300px)'
//       }))),
//     transition('delete <=> add', animate(300,
//       style({
//         opacity: 0,
//         border: '2px solid black',
//         transform: 'translateX(300px)'
//       })))
//   ])
// ]
