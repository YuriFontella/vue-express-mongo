'use strict'

$(document).ready(function () {
  var $body = $('body')

  $body.on('click', '[data-ma-action]', function (e) {
    e.preventDefault()

    var $this = $(this)
    var action = $this.data('ma-action')
    var target = ''

    switch (action) {
			/* -------------------------------------------
					Search
			--------------------------------------------- */
			// Open
      case 'search-open':
        $('.search').addClass('search--toggled')
        break

			// Close
      case 'search-close':
        $('.search').removeClass('search--toggled')
        break

			/* -------------------------------------------
					Aside
			--------------------------------------------- */
			// Open
      case 'aside-open':
        target = $this.data('ma-target')
        $this.addClass('toggled')
        $(target).addClass('toggled')
        $('.content, .header').append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + target + ' />')
        break

      case 'aside-close':
        target = $this.data('ma-target')
        $('[data-ma-action="aside-open"], ' + target).removeClass('toggled')
        $('.content, .header').find('.ma-backdrop').remove()
        break
    }
  })
})
