var ContactCard = {
    bindings: {
      name: '=',
      email: '=',
      phone: '='
    },
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name:</label>',
        '{{ ctrl.name }}',
        '<label>Email:</label>',
        '{{ ctrl.email }}',
        '<label>Phone:</label>',
        '{{ ctrl.phone }}',
      '</div>'
    ].join(''),
    controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('contactCard', ContactCard);
