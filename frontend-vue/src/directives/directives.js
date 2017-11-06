import Vue from 'vue'

const Directives = Vue.directive('form-control-active', {
  inserted (el, binding, vnode) {
    $('.form-group--float').each(function () {
      var p = $(this).find('.form-control').val()

      if (!p.length === 0) {
        $(this).find('.form-control').addClass('form-control--active')
      }
    })

    $('body').on('blur', '.form-group--float .form-control', function () {
      var i = $(this).val()

      if (i.length === 0) {
        $(this).removeClass('form-control--active')
      }			else {
        $(this).addClass('form-control--active')
      }
    })
  }
})

export default Directives
