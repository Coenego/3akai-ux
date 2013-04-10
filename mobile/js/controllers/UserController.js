define(
    [
        'oae.core',
        '/mobile/js/constants/constants.js',
        '/mobile/js/mobile.util.js'
    ],
    function(oae, constants, mobileUtil){

        // Properties
        var instance = null;

        var mainController = null;

        /////////////////////
        //// Constructor ////
        /////////////////////

        function UserController(){
            if(instance !== null){
                throw new Error("Cannot instantiate more than one UserController, use UserController.getInstance()");
            }
        }

        ////////////////////
        // Public methods //
        ////////////////////

        UserController.prototype = {

            /**
             * Initialize UserController
             */
            initialize: function(_mainController) {
                // Bind events
                addBinding();
                // Store an instance of MainController
                mainController = _mainController;
            }
        };

        /**
         * Returns an instance of the MainController
         * @return Class {*}        Returns an instance of the MainController
         */
        UserController.getInstance = function(){
            if(instance === null) instance = new UserController();
            return instance;
        };

        /////////////////////
        // Private methods //
        /////////////////////

        /**
         * Login
         *
         * @param {Event}       e                   The dispatched event
         * @param {Object}      obj                 The object containing the login values
         * @param {String}      obj.username        The username
         * @param {String}      obj.password        The password
         * @param {Function}    obj.callback        The callback function
         */
        var login = function(e, obj) {
            $(document).trigger(constants.events.activities.activitystart);
            oae.api.authentication.login(obj.username, obj.password, function(err) {
                if(err) {
                    $(document).trigger(constants.events.activities.activityend);
                    obj.callback(err);
                }else{
                    try{
                        setTimeout(function(){
                            oae.init(function(e){
                                $(document).trigger(constants.events.activities.activityend);
                                $(document).trigger(constants.events.user.loginsuccess);
                            });
                        }, 500);
                    }catch(e){
                        console.log('[UserController] Executing oae.init failed after login');
                        $(document).trigger(constants.events.activities.activityend);
                    }
                }
            });
        };

        /**
         * Logout
         *
         * @param {Event}       e                   The dispatched event
         * @param {Object}      obj                 The parameters
         * @param {Function}    obj.callback        The callback function
         */
        var logout = function(e, obj) {
            $(document).trigger(constants.events.activities.activitystart);
            oae.api.authentication.logout(function(err) {
                if(err) {
                    obj.callback(err);
                    $(document).trigger(constants.events.activities.activityend);
                }else{
                    try{
                        setTimeout(function(){
                            oae.init(function(e){
                                $(document).trigger(constants.events.activities.activityend);
                                $(document).trigger(constants.events.user.logoutsuccess);
                            });
                        }, 500);
                    }catch(e){
                        console.log('[UserController] Executing oae.init failed after logout');
                        $(document).trigger(constants.events.activities.activityend);
                    }
                }
            });
        };

        // Private methods
        var addBinding = function() {
            $(document).on(constants.events.user.loginattempt, login);
            $(document).on(constants.events.user.logoutattempt, logout);
        };

        // Singleton
        return UserController.getInstance();
    }
);