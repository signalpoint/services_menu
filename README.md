services_menu
=============

A DrupalGap module to support the Services Menu module in Drupal. Used to load menus.

Setup
=====

1. Download and enable the partner Drupal module:

https://drupal.org/project/services_menu

2. Enable the 'retrieve' resource under the 'menu' service in the Drupal UI:

admin/structure/services/list/drupalgap/resources

3. Grant the 'Get menu' permission to your desired user roles in the Drupal UI:

admin/people/permissions

Example Usage
=============

```
services_menu_load('menu-my-custom-menu', {
  success: function(results) {
    console.log(results);
  }
});
```

