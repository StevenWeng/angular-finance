// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Gulp

// Config
angular.module('angularFinance.config', [])
    .value('angularFinance.config', {
        debug: true
    });

// Modules
angular.module('angularFinance.directives', []);
angular.module('angularFinance.filters', []);
angular.module('angularFinance.services', []);
angular.module('angularFinance',
    [
        'angularFinance.config',
        'angularFinance.directives',
        'angularFinance.filters',
        'angularFinance.services'
    ]);
