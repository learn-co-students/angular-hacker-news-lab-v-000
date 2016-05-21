describe('PostService', function(){

  var serviceMock;
  var mockPostIds = [1,2,3];
  var mockStory = {
    by: "Tomte",
    descendants: 10,
    id: 11743444,
    kids: [11743777,11743721],
    score: 57,
    time: 1463811487,
    title: "House tells NASA to start planning two Europa missions",
    type: "story",
    url: "http://arstechnica.com/science/2016/05/house-budget-provides-260-million-for-two-life-tracking-europa-missions/"
  };
  var mockComment = {
    by: "dragonbonheur",
    id: 11743777,
    kids: [11743785,11743847,11743796],
    parent: 11743444,
    text: "John Culberson receives money from Boeing, Lockheed Martin, SpaceX, Orbital ATK and Northrop Grumman.<p>Whenever a US politician makes a statement, I look Why they made that statement - and the why is often that they get paid in campaign contributions to say precisely what their donors want them to say. Whether it&#x27;s about foreign policy or anything else, it&#x27;s easy to go on opensecrets.org and see who their donors are and thus why they made a statement.<p>Nothing is done in America&#x27;s interests - it&#x27;s done to stuff pockets full of cash and contracts. <a href=\"http:&#x2F;&#x2F;www.opensecrets.org&#x2F;politicians&#x2F;contrib.php?cycle=2016&amp;cid=N00009738&amp;type=I&amp;newmem=N\" rel=\"nofollow\">http:&#x2F;&#x2F;www.opensecrets.org&#x2F;politicians&#x2F;contrib.php?cycle=201...</a>",
    time: 1463819050,
    type: "comment"
  };

  beforeEach(module('app'));
  beforeEach(inject(function (PostService) {
    mockPostService = PostService;
  }));

  describe('.getPostIds()', function () {
    it('should resolve postIds', function () {
      spyOn(mockPostService, 'getPostIds').and.returnValue(mockPostIds);
      var respData = mockPostService.getPostIds();

      expect(mockPostService.getPostIds).toHaveBeenCalled();
      expect(respData).toEqual([1,2,3]);
    });
  });

  describe('.getPost()', function(){
    it('should be called with an id', function () {
      spyOn(mockPostService, 'getPost').and.returnValue(mockStory);
      var respData = mockPostService.getPost(11743444);

      expect(mockPostService.getPost).toHaveBeenCalledWith(11743444);
    });

    it('should resolve story item', function () {
      spyOn(mockPostService, 'getPost').and.returnValue(mockStory);
      var respData = mockPostService.getPost(11743444);

      expect(respData.by).toEqual(jasmine.any(String));
      expect(respData.descendants).toEqual(jasmine.any(Number));
      expect(respData.id).toEqual(jasmine.any(Number));
      expect(respData.kids).toEqual(jasmine.any(Array));
      expect(respData.kids[0]).toEqual(jasmine.any(Number));
      expect(respData.score).toEqual(jasmine.any(Number));
      expect(respData.time).toEqual(jasmine.any(Number));
      expect(respData.title).toEqual(jasmine.any(String));
      expect(respData.type).toEqual("story");
      expect(respData.url).toEqual(jasmine.any(String));
    });

    it('should resolve comment item', function () {
      spyOn(mockPostService, 'getPost').and.returnValue(mockComment);
      var respData = mockPostService.getPost(11743777);

      expect(respData.by).toEqual(jasmine.any(String));
      expect(respData.id).toEqual(jasmine.any(Number));
      expect(respData.kids).toEqual(jasmine.any(Array));
      expect(respData.kids[0]).toEqual(jasmine.any(Number));
      expect(respData.parent).toEqual(jasmine.any(Number));
      expect(respData.time).toEqual(jasmine.any(Number));
      expect(respData.text).toEqual(jasmine.any(String));
      expect(respData.type).toEqual("comment");
    });
  });

});
