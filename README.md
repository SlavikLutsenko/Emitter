# Emitter

## Download
<a href="https://github.com/SlavikLutsenko/Emitter/archive/master.zip">Download emitter.js and unit test</a>

## Installation
```
<script type="text/javascript" src="emitter.js"></script>
```
## Examples
```
var a = emitter({
    bb: 22
})

a.on('roof-on-fire', function (data) {
   console.log('put the fire')
   console.log(this.bb)
   console.log(data)
})

a.one('roof-on-fire', function (data) {
   console.log('call the fireman')
   console.log(data)
})

a.emit('roof-on-fire', { address: '560, Mission st.'})

a.emit('roof-on-fire', { address: '565, Market st.'})

a.off('roof-on-fire')

a.emit('roof-on-fire', { address: '55, Polk st.'})
```
