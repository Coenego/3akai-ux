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

define(['exports'], function(exports) {

    return {
        alerts: {
            init                        : 'oae-mobile-modal-init',
            kill                        : 'oae-mobile-modal-destroy',
            types: {
                confirm                 : 'oae-mobile-alert-confirm',
                error                   : 'oae-mobile-alert-error',
                warning                 : 'oae-mobile-alert-warning'
            }
        },
        authentication: {
            events: {
                loginattempt            : 'oae-mobile-user-login-attempt',
                logoutattempt           : 'oae-mobile-user-logout-attempt',
                loginsuccess            : 'oae-mobile-user-login-success',
                logoutsuccess           : 'oae-mobile-user-logout-success',
                socialloginattempt      : 'oae-mobile-user-social-login-attempt',
                sociallogoutattempt     : 'oae-mobile-user-social-logout-attempt'
            },
            types: {
                local                   : 'oae-authentication-local',
                google                  : 'oae-authentication-google',
                facebook                : 'oae-authentication-facebook',
                twitter                 : 'oae-authentication-twitter'
            }
        },
        events: {
            activities: {
                activitystart           : 'oae-mobile-activity-start',
                activityend             : 'oae-mobile-activity-end',
                templatesready          : 'oae-mobile-templates-ready',
                viewchanged             : 'oae-mobile-view-changed',
                viewpopped              : 'oae-mobile-view-popped',
                initmenu                : 'oae-mobile-init-menu',
                menutoggle              : 'oae-mobile-menu-toggle',
                menuclicked             : 'oae-mobile-menu-clicked'
            },
            data: {
                getsettings             : 'oae-mobile-get-settings'
            }
        },
        components: {
            templatehelper              : '#oae-mobile-template-helper'
        },
        paths: {
            settings                    : 'mobile/lib/settings.json'
        },
        views: {
            detail                      : 'oae-mobile-detail-view',
            home                        : 'oae-mobile-home-view',
            login                       : 'oae-mobile-login-view'
        }
    };

});
