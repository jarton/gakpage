import $ from 'jquery'
import jQuery from 'jquery'

window.$ = $
window.jQuery = jQuery
global.jQuery = jQuery

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import bootstrapjs from '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import headerStyle from './css/gakHeader.css'
import footerStyle from './css/gakFooter.css'
import Mustache from 'mustache'
import videos from './videos.js'
import home from './home.js'

import homeTemplate from './html/home.html'
import videoTemplate from './html/videos.html'
import infoTemplate from './html/info.html'
import contactTemplate from './html/contact.html'


$(document).ready(() => { 
	//add links for navbar
	
clickLink(homeTemplate).done(() => {
	home.loadNews()
})

	$('#nav-logo').click((event) => {
		event.preventDefault();
		$('.active').removeClass();
		$('#nav-home').addClass('active');
		clickLink(homeTemplate).done(() => {
			home.loadNews()
		})
	})

	$('#nav-home').click((event) => {
		event.preventDefault();
		$('.active').removeClass();
		$('#nav-home').addClass('active');
		clickLink(homeTemplate).done(() => {
			home.loadNews()
		})
	})

	$('#nav-video').click((event) => {
		event.preventDefault();
		$('.active').removeClass();
		$('#nav-video').addClass('active');
		clickLink(videoTemplate).done(() => {
			videos.loadVids()
		})
	})

	$('#nav-info').click((event) => {
		event.preventDefault();
		$('.active').removeClass();
		$('#nav-info').addClass('active');
		clickLink(infoTemplate)
	})

	$('#nav-contact').click((event) => {
		event.preventDefault();
		$('.active').removeClass();
		$('#nav-contact').addClass('active');
		clickLink(contactTemplate)
	})
})

function clickLink(template) {
	return $('#mainArea').html(Mustache.render(template)).promise()
}

