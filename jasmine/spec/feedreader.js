
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        // This is our first test - it tests to make sure that the
        // allFeeds variable has been defined and that it is not
        // empty.

        it('is defined and is not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Loops through each feed in the allFeeds object and ensures it has a URL defined
        // and that the URL is not empty.

         it('have a URL defined and is not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });

        // Loops through each feed in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.

         it('have a name defined and is not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
       });


    describe('The menu', function() {
      const body = document.body;
        // Ensures that the menu element is hidden by default by checking whether
        // "body" contains the "menu-hidden" class.

         it("should be hidden by default", function() {
           expect(body.classList).toContain("menu-hidden");
         });

        // Ensures the menu changes visibility when the menu icon is clicked by
        // checking whether "body" toggles the "menu-hidden" class on click.

          it("should show when clicked, and hide when clicked again", function() {
            const menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect(body.classList).not.toContain("menu-hidden");

            menuIcon.click();
            expect(body.classList).toContain("menu-hidden");
          });
      });

    describe('Initial Entries', function() {
        // Ensures when the loadFeed function is called and completes its work, there is at least
        // a single .entry element within the .feed container.
        // Checks the length of ".entry" to see if it is greater than 0.

         beforeEach(function(done) {
           loadFeed(0, done);
           });


         it("should contain at least a single entry", function(done) {
           expect($('.feed .entry').length).toBeGreaterThan(0);
           done();
         });
      });

      describe('New Feed Selection', function() {
        let feed1;
        let feed2;
        // Ensures when a new feed is loaded by the loadFeed function
        // that the content actually changes.
        // Assigns the innerHTML of two feeds to variables feed1 and feed2.

         beforeEach(function(done) {
           loadFeed(0, function() {
             feed1 = $('.feed').html();
             loadFeed(1, function() {
               feed2 = $('.feed').html();
               done();
             });
           });
         });

         // Compares the innerHTML of the two feeds to ensure that they don't match.
         it("should change content when a new feed is loaded", function(done) {
           expect(feed1).not.toEqual(feed2);
           done();
         });
       });


}());
