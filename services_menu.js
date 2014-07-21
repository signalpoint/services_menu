/**
 * Load a menu, given the menu name.
 */
function services_menu_load(name, options) {
  try {
    options.method = 'GET';
    options.path = 'menu/' + encodeURIComponent(name) + '.json';
    options.service = 'services_menu';
    options.resource = 'retrieve';
    Drupal.services.call(options);
  }
  catch (error) { console.log('services_menu_load - ' + error); }
}

/**
 * Given a menu JSON object from menu_load(), this will extract the 'tree' items
 * from the menu, and return them as JSON obect items in an array.
 */
function services_menu_tree(menu) {
  try {
    var items = [];
    $.each(menu.tree, function(name, menu_item) {
        var item = menu_item.link;
        items.push(item);
    });
    if (items.length == 0) { items = null; }
    return items;
  }
  catch (error) { console.log('services_menu_tree - ' + error); }
}

