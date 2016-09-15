import $ from 'jquery'
import Mustache from 'mustache'
import newsData from '../data/news.json'
import homeStyle from './css/home.css'

import storyTemplate from './html/story.html'

export default { 
	loadNews:	function loadVids() {
		newsData.forEach((story) => {
			story.lambda = () => {
				return (text, render)	=> {
					return "<p>" + render(text) + "</p>"
				}
			}
			$('#storyArea').append(Mustache.render(storyTemplate, story))
			$('#'+ story.id).load(story.html)
		})
	}
}
