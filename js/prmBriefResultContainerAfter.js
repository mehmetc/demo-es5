app.component('prmBriefResultContainerAfter', {
  bindings: { parentCtrl: '<'},
  controller: function() {
    var ctrl = this;
    try {
      this.recordid = this.parentCtrl.item.pnx.control.recordid[0];
    } catch(e) {
      this.recordid = null;
    }
  },
  templateUrl: 'pnxXml.html'
});
