export function addUser() {
  const count = $('li').length;
  $('#list').append(`<li>Thomas${count}</li>`);
}

export function removeUser() {
  const $li = $('#list').find('li:last');
  $li.remove();
}
