jQuery(document).ready(function ($) {

    var icf = {
        init: function () {
            this.fullpage.callActions()
            this.svgRenderData.callActions()
            this.matchHeight()
        },
        fullpage: {
            callActions: function () {
                this.initialize()
            },
            initialize: function () {
                var myFullpage = new fullpage('#fullpage', {
                    lazyLoad: true,
                    navigation: true,
                    autoScrolling: false,
                });
            },

        },
        svgRenderData: {
            callActions: function () {
                this.render()
            },
            render: function () {
            }
        },
        matchHeight: function () {
            if ($(".mh-0").length != 0) {
                $(".mh-0").matchHeight();
            }
            if ($(".mh-1").length != 0) {
                console.log("match height")
                $(".mh-1").matchHeight();
            }
            if ($(".mh-2").length != 0) {
                $(".mh-2").matchHeight();
            }
            if ($(".module-list-item").length != 0) {
                $(".module-list-item").matchHeight();
            }
        },
    }
    icf.init()

});