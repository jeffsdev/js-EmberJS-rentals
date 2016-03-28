import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('rental', 'announcement');
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      newRental.save();
      this.transitionTo('index');
    },
    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement){
      announcement.destroyRecord();
      this.transitionTo('index');
    },
    destroyRental(rental){
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
