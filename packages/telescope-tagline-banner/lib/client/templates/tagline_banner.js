Template.taglineBanner.helpers({
  showTaglineBanner: function () {
    return !!Settings.get('tagline') && !!Settings.get('showTaglineBanner');
  }
});

