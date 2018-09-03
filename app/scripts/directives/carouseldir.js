(function() {
'use strict';

    angular
        .module('carouselApp', [])
        .directive('carousel', function($timeout) {

            return {
                restrict: 'AE',
                replace: true,
                scope: {
                    images: "="
                },
                link: function(scope) {
                    scope.currentIndex = 0;

                    /* Start: arrow/click to change images */

                    // Ternary Operator to move to the correct next image.
                    scope.next = function () {
                        scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
                    };

                    // Ternary Operator to move to the correct next image.
                    scope.prev = function() {
                        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
                    };

                    scope.$watch('currentIndex', function() {
                        scope.images.forEach(function(image) {
                            image.visible = false;
                        });
                        scope.images[scope.currentIndex].visible = true;
                    });

                    /* End: arrow/click to change images */

                    /* Start: Automatic Transitions */
                    var timer;

                    var sliderFunc = function() {
                        timer = $timeout(function() {
							scope.next();
                            timer = $timeout(sliderFunc, 3000);
                        }, 3000);
                    };

                    sliderFunc();

                    scope.$on('$destroy', function() {

                        $timeout.cancel(timer);
                    });
                    /* End: Automatic Transitions */
                },
                templateUrl: 'views/templates/carousel.tmpl.html'
            };
        }); // End Directive.
})();