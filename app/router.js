import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("resume", {path: '/'});
  this.route('resume');
  this.route('projects');
});

export default Router;
