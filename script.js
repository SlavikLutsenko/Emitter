var a = emitter({
    bb: 22
})

// подписались на событие, колбек выполнится столько раз сколько событие зафайрится
a.on('roof-on-fire', function (data) {
   console.log('put the fire')
   console.log(this.bb)
   console.log(data)
})

// подписались на событие, колбек выполнится всего раз
a.one('roof-on-fire', function (data) {
   console.log('call the fireman')
   console.log(data)
})

// файрим событие. 
// в консоль пишется 'put the fire' и 'call the fireman'
a.emit('roof-on-fire', { address: '560, Mission st.'})

// файрим еще раз
// в консоль пишется только 'put the fire'
a.emit('roof-on-fire', { address: '565, Market st.'})


a.off('roof-on-fire')


// файрим еще раз
// в консоль не пишется ничего
a.emit('roof-on-fire', { address: '55, Polk st.'})