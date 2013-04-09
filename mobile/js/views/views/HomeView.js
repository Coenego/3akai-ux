/*!
 * Copyright 2012 Sakai Foundation (SF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

define(
    [
        'jquery','underscore','oae.core',
        '/mobile/js/constants/constants.js',
        '/mobile/js/mobile.util.js'
    ],
    function($, _, oae, constants, mobileUtil) {

        // Properties
        var _settings = HomeView.prototype.settings = {
            name: "homeView",
            template: {
                'templateID': "#home-view-template",
                'templateURL': "/mobile/templates/views/home-view.html"
            }
        };

        // Constructor
        function HomeView() {}

        // Public methods
        HomeView.prototype.initialize = function() {
            renderTemplate();
        };

        HomeView.prototype.destroy = function() {
            _templateId = null;
            deleteBinding();
        };

        // Private methods
        var renderTemplate = function() {
            oae.api.util.template().render(_settings.template.templateID, null, $('#oae-mobile-viewport'));
            oae.api.widget.insertWidget('mobileactivity', null, $('#mobile-activity-widget-container'));
            setTitle(oae.data.me.tenant);
            addBinding();
        };

        /**
         * Set page title {String} title        The title of the page
         * @param title
         */
        var setTitle = function(title){
            $('.oae-mobile-view-title').html(title);
        };

        var addBinding = function() {
            $('#btnMenu').bind('click', onToggleMenuClick);
        };

        var deleteBinding = function() {
            $('#btnMenu').unbind('click', onToggleMenuClick);
        };

        var onToggleMenuClick = function() {
            $(document).trigger(constants.events.activities.menutoggle);
        };

        return HomeView;
    }
);