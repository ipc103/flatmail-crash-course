import Ember from 'ember';

export default Ember.Controller.extend({
  messages: Ember.computed.filterBy("model.@each.starred", "starred", true)
});
