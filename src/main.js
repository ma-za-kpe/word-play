import {
    Results
} from "./triangle-tracker";
import './styles.css';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function () {
    $("form#triangle").submit((event) => {

        var form = Results();

        console.log(form);


        event.preventDefault();
    });
});