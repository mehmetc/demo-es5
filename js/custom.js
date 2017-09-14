(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', []);

app.run(function ($templateCache) {
  $templateCache.put('pnxXml.html', '<style>\n  .pnx-xml {\n    font-size:0.5em;\n    justify-content:space-around;\n  }\n</style>\n\n<div class=\'pnx-xml\'>\n  <a target="_blank" ng-href="http://limo.q.libis.be/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.xml?needSession=0">XML</a> |\n  <a target="_blank" ng-href="http://limo.q.libis.be/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.pnx?needSession=0">PNX</a>\n</div>\n');
});
app.component('prmBriefResultContainerAfter', {
  bindings: { parentCtrl: '<' },
  controller: function controller() {
    var ctrl = this;
    try {
      this.recordid = this.parentCtrl.item.pnx.control.recordid[0];
    } catch (e) {
      this.recordid = null;
    }
  },
  templateUrl: 'pnxXml.html'
});
})();