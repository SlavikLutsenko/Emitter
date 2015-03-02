var result = new Array();

a.on('roof-on-fire', function (data) {
   result.push("put the fire")
   result.push(this.bb)
   result.push(data)
})

// подписались на событие, колбек выполнится всего раз
a.one('roof-on-fire', function (data) {
   result.push("call the fireman")
   result.push(data)
})

describe("first test", function () {
	it("number event", function () {
		expect(a.event.length).toEqual(2);
	})
	it("event #1", function () {
		a.emit('roof-on-fire', { address: '560, Mission st.'})
		expect(result).toEqual(["put the fire", a.bb, { address: '560, Mission st.'}, "call the fireman", { address: '560, Mission st.'}]);
		result.splice(0, result.length);
	})
	it("number event", function () {
		expect(a.event.length).toEqual(1);
	})
	it("event #2", function () {
		a.emit('roof-on-fire', { address: '565, Market st.'})
		expect(result).toEqual(["put the fire", a.bb, { address: '565, Market st.'}]);
		result.splice(0, result.length);
	})
	it("number event", function () {
		a.off('roof-on-fire');
		expect(a.event.length).toEqual(0);
	})
	it("event #3", function () {
		a.emit('roof-on-fire', { address: '55, Polk st.'})
		expect(result).toEqual([]);
		result.splice(0, result.length);
	})
})