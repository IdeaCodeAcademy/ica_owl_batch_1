/** @odoo-module */
import {Component, onWillStart, useState} from "@odoo/owl";
import {ScrollableComponent} from "../scrollable_component/scrollable_component";
import {CustomerList} from "../customer_list/customer_list";

export class GridViewComponent extends Component {
    static template = "ica_movie.GridViewComponent";
    static props = {};
    static components = {ScrollableComponent, CustomerList}
}