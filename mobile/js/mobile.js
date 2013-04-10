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

require.config({
    paths: {
        mainController: '/mobile/js/controllers/MainController'
    }
});

require(['mainController'], function(mainController) {

        /**
         * Initializes the main controller
         */
        var initMainController = function() {
            mainController.initialize();
        };

        /**
         * Initialize
         */
        var doInit = function() {
            initMainController();
        };

        doInit();
    }
);