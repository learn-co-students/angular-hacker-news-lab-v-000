// describe('ApiService', function () {
//     beforeEach(module('app'));
 
//     var ApiService, $httpBackend;
 
//     beforeEach(inject(function ($injector) {
//         ApiService = $injector.get('ApiService');
//         $httpBackend = $injector.get('$httpBackend');
 
//         $httpBackend.when('GET', 'https://hacker-news.firebaseio.com/v0/topstories.json').respond([11832237, 11830598, 11832266, 11829994, 11817758, 11829713, 11830659, 11832056, 11830329, 11831060])    
//       }));
 
//     it('should get the top stories', function (done) {
//         $httpBackend.expectGET('https://hacker-news.firebaseio.com/v0/topstories.json');

//         ApiService
//             .getTop()
//             .then(function (res) {
//               debugger;
//               if (typeof(res) === Array) {
//                 done();
//               }
//             });
 
//         $httpBackend.flush();
//     });

//     // it('should retrieve stories by id', function(done){
//     //   $httpBackend.expectGet('https://hacker-news.firebaseio.com/v0/item/{id}.json')

//     //   ApiService
//     //       .getStory()
//     //       .then(function(res){
//     //         if("SOME CONDITION" =="OTHER CONDITION") {
//     //           done();
//     //         }
//     //       })

//     //     $httpBackend.flush();

//     // })
// });