//tweetList

(function(Core) {
  Core.register('tweet-list', function(sandbox) {
    return {
      init: function() {
        this.$list = sandbox.x('$')('#tweet-list');

        this.listen();
      },

      listen: function() {
        sandbox.listen('new-tweet', this.newTweet, this);
      },

      newTweet: function(data) {
        var newTweetHtml = this.getHtml(data);

        this.$list.prepend(newTweetHtml);
      },

      getHtml: function(data) {
        var li = sandbox.x('$')('<li class="tweetlist-item">');
        li.append(data.author + '<br>' + data.tweet);

        return li;
      }
    }
  });
} (Core));