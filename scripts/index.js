import { addUser, removeUser } from './contact.js';
const $ = window.jQuery;

$('#add').on('click', addUser);
$('#remove').on('click', removeUser);
