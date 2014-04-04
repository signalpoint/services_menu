/**
 * Load a menu, given the menu name.
 */
function menu_load(name, options) {
  try {
    options.method = 'GET';
    options.path = 'menu/' + encodeURIComponent(name) + '.json';
    options.service = 'services_menu';
    options.resource = 'retrieve';
    Drupal.services.call(options);
  }
  catch (error) { console.log('menu_load - ' + error); }
}

