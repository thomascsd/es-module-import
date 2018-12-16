import { addUser, removeUser } from './contact.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js';
const $ = window.jQuery;

$('#add').on('click', addUser);
$('#remove').on('click', removeUser);
