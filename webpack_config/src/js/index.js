import {name,age,ma} from './ul.js'
import '../css/my.css'
import $ from './vender.js'

console.log(name,age,ma());

$(function() {
	$(document).on("click",'#first',function() {
		$(this).toggleClass('tl');
		$("body").addClass('black-theme')
	})
})

