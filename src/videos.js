import $ from 'jquery'
import Mustache from 'mustache'
import videoData from '../data/videos.json'
import videoStyle from './css/video.css'

import singeVideoTemplate from './html/singleVideo.html'


function addClickListerns() {
	$('.vidThumb').on('click', (event) => {
			event.preventDefault()
			//remove old
			$('.selected-vid').addClass('col-md-4')
			$('.selected-vid').removeClass('col-md-12')
			$('.selected-vid').children().show()
			$('.selected-vid > iframe').remove()

			//show new video
		let html = '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F338312802949307%2Fvideos%2Fvb.338312802949307%2F' + event.target.id + 
		'%2F%3Ftype%3D2%26theater&width=1150&show_text=false&height=545&appId" width="1150" height="545" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
			html = $.parseHTML(html)
			$('#'+ event.target.id).parent().children().hide()
			$('#'+ event.target.id).parent().removeClass('col-md-4')
			$('#'+ event.target.id).parent().addClass('col-md-12')
			$('#'+ event.target.id).parent().addClass('selected-vid')
			$('#'+ event.target.id).parent().append(html)
	})
}

export default { 
	loadVids:	function loadVids() {
		let counter = 0;
		videoData.forEach((vidobj) => {
			$('#vidrow1').append(Mustache.render(singeVideoTemplate, vidobj))
			counter++;
			if (counter === videoData.length) {
				addClickListerns();	
			}
		})
	}
}
