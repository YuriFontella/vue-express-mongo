'use strict'

$(document).ready(function () {
    /* ------------------------------------------------
        Search
    ------------------------------------------------- */

    // Active Stat
  $('body').on('focus', '.search__text', function () {
    $(this).closest('.search').addClass('search--focus')
  })

    // Clear
  $('body').on('blur', '.search__text', function () {
    $(this).val('')
    $(this).closest('.search').removeClass('search--focus')
  })
})
