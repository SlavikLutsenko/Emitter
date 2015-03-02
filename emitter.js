function emitter(obj){
	obj = obj || {};

	obj.event = new Array();
	obj.last_id_event = 0;

	obj.addEvent = function (name, call_back, disposable) {
		obj.event.push({
			id_event: this.last_id_event++,
			name_event: name,
			call_back_function: call_back,
			disposable: disposable
		});
	}

	obj.deleteEvent = function  (id_event) {
		this.event.splice(id_event, 1);
		for (var i = id_event; i < this.event.length; i++) {
			this.event[i].id_event--;
		};
		this.last_id_event--;
	}

	obj.on = function (name_event, call_back) {
		this.addEvent(name_event, call_back, false);
	}

	obj.one = function (name_event, call_back) {
		this.addEvent(name_event, call_back, true);
	}

	obj.emit = function (name_event, data) {
		for (var i = 0; i < this.event.length; i++)
			if(this.event[i].name_event == name_event){
				this.event[i].call_back_function.call(this, data);
				if(this.event[i].disposable) this.deleteEvent(this.event[i].id_event);
			}
	}

	obj.off = function (name_event) {
		for (var i = 0; i < this.event.length; i++)
			if(this.event[i].name_event == name_event)
				this.deleteEvent(this.event[i].id_event);
	}

	return obj;
}