setTimeout(function typing() {

	var fields = document.querySelectorAll('input');
	var text = ["Nikita Kalachev", "18 feb 1990", "Ulyanovsk", "nikitakalachev18@gmail.com"];

	function print(input, num, timeout) {
		setTimeout(function () {
			var i = 0;
			function type() {
				if (i <= text[num].length) {
			input.value = text[num].substr(0, i);
			setTimeout(type, 100);
				}
				console.log(text[num].length);
				i++;
			}
			type();
			console.log(type());
			if (num == 3) {
			setTimeout(
				function () {
				document.getElementById('postlogo_animation').className +=" postlogo-img"
				}, 
				text[num].length * 120);
			}
		}, timeout);
	}

	for (var b = 0; b < fields.length; b++) {
		var timeout = 0;
		var input = fields[b];
		if (b > 0) {
			for (var c = 0; c < b; c++) {
				timeout += text[c].length * 140
			}
		}
		print(input, b, timeout)
	}
}, 1000);

var r = 95;
var circles = document.querySelectorAll('.circle');
var total_circles = circles.length;
for (var i = 0; i < total_circles; i++) {
	circles[i].setAttribute('r', r);
}

var cf = 2 * Math.PI * r;
var semi_cf = cf / 2;
var semi_cf_1by3 = semi_cf / 3;
var semi_cf_2by3 = semi_cf_1by3 * 2;
document.querySelector('#outline_curves')
	.setAttribute('stroke-dasharray', semi_cf + ',' + cf);
document.querySelector('#low')
	.setAttribute('stroke-dasharray', semi_cf + ',' + cf);
document.querySelector('#avg')
	.setAttribute('stroke-dasharray', semi_cf_2by3 + ',' + cf);
document.querySelector('#high')
	.setAttribute('stroke-dasharray', semi_cf_1by3 + ',' + cf);
document.querySelector('#outline_ends')
	.setAttribute('stroke-dasharray', 2 + ',' + (semi_cf - 2));
document.querySelector('#mask')
	.setAttribute('stroke-dasharray', semi_cf + ',' + cf);


var lbl = document.querySelector("#lbl");
var mask = document.querySelector('#mask');
var meter_needle =  document.querySelector('#meter_needle');
var js_value = 0;
function range_change_event(percent) {

	var meter_value = semi_cf - ((percent * semi_cf) / 100);
	mask.setAttribute('stroke-dasharray', meter_value + ',' + cf);
	meter_needle.style.transform = 'rotate(' + (270 + ((percent * 180) / 100)) + 'deg)';
	lbl.textContent = percent + '%';
}

function animate () {
	range_change_event(js_value);
	var interval = setInterval(function(){
		if (js_value <17) {
			js_value+=1;
			range_change_event(js_value)
		}
	},500);
}

function animate_bounce () {
	range_change_event(js_value);
	var interval = easeInOut(function(){
		if (js_value =17) {
			return timing(2 * timeFraction) / 2;
			}
		else {
			return (2 - timing(2 * (1 - timeFraction))) / 2;
}
	});
}

document.addEventListener('DOMContentLoaded', animate());