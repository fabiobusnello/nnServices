import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js'
import 'bootstrap'
import $ from 'jquery'
import {ajax} from './ajax'
import '../index.css'
import 'axios-progress-bar/dist/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'
import resetOrientation from './fb-images'
import { alerts } from '../modules/alerts'
import { createList } from './create-list';
import closeSidebar from './close-sidebar';
import showSidebar from './show-sidebar';

window.showSidebar = showSidebar
window.closeSidebar = closeSidebar
window.createList = createList
window.alerts = alerts
window.resetImage = resetOrientation
window.jQuery = $
window.$ = $
window.ajax = ajax
loadProgressBar()