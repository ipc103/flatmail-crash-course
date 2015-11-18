import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.modelFor('messages').filterBy('starred', true);
  },
  renderTemplate(){
    this.render('messages/messages');
  }
});
