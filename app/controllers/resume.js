import Ember from 'ember';

export default Ember.ArrayController.extend({

  trainings: [
    { name: "gSchool",
      desc: "Full-Stack Immersive <br> Ruby on Rails, Ember",
      date: "April 2015"},
    { name: "xSmallBiz",
      desc: "Work Study <br> Twitter API integration",
      date: "March 2015"},
    { name: "yStartupCO",
      desc: "Work Study <br> Rebuilt responsive site",
      date: "March 2015"},
    { name: "zNeighborTech",
      desc: "Work Study <br> Created new database structure",
      date: "February 2015"}
  ]

});
