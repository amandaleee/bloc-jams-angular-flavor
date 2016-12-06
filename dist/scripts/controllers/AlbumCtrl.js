(function() {
  function AlbumCtrl() {
    this.albumData = albumPicasso;
   debugger;
    // this.songs = [];
    // this.title = "YUP";
    // //song in album.songs
    // for (var i=0; i < 12; i++) {
    //   this.songs.push(angular.copy(this.title));
    // }
    // this.albumData =  {
    //   title: 'The Colors',
    //   artist: 'Pablo Picasso',
    //   label: 'Cubism',
    //   year: '1881',
    //   albumArtUrl: 'assets/images/album_covers/01.png',
    //   songs: [
    //     { title: 'Blue', duration: '4:26', audioUrl: 'assets/music/blue' },
    //     { title: 'Green', duration: '3:14', audioUrl: 'assets/music/green' },
    //     { title: 'Red', duration: '5:01', audioUrl: 'assets/music/red' },
    //     { title: 'Pink', duration: '3:21', audioUrl: 'assets/music/pink'},
    //     { title: 'Magenta', duration: '2:15', audioUrl: 'assets/music/magenta'}
    //   ]
    // };
  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();