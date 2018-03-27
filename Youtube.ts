class YouTube{
    constructor (public mainvideo:string,public comments:string,public noOfViews:number,public likes){
        this.mainvideo = mainvideo;
        this.comments=comments;
        this.noOfViews = noOfViews;
        this.likes =likes;
    }
    Subscribe : ()=>{};
    getSearch : () =>{ return new Video()};
    Share : ()=>{//share};
    setLike : ()=>{let like; this.like++};
    
     UpNext : {
        vid1 = new Video();
        vid2 = new Video();
        vid3 = new Video();
    }
    }
}

class Video{                    //this is for the thumbnails of videos in the right side
    public name:string;
    public img = new Image();
    public channelName : string;
    public views: number;
}