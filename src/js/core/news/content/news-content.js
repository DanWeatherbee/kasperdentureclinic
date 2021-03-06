// news.js
var newsContainer = '<main class="container animated fadeIn" id="news-container"></main>';
/*
 Content ===================================================================
// cols
*/
var newsCol1 = '<article class="col-xs-0 col-sm-1 col-md-3" id="news-col1"></article>';
var newsCol2 = '<article class="col-xs-12 col-sm-10 col-md-6" id="news-col2"></article>';
var newsCol3 = '<article class="col-xs-0 col-sm-1 col-md-3" id="news-col3"></article>';
// tags
var newsHeaderH1Tag = '<br /><h1 id="news-header-h1-tag" class="text-center"></h1><br/>';
// img src 1
var newsImgSrc1 = 'images/probono.png';
// img 1
var newsImg1 = '<img class="img-thumbnail img-responsive center-block" id="news-img1" src="' +
newsImgSrc1 +
'" alt="' +
newsImgSrc1 +
'">';
// h2
var newsH3Tag1 = '<br /><h3 id="news-h3-tag1"></h3>';
var newsH3Tag2 = '<br /><h3 id="news-h3-tag2"></h3>';
var newsH3Tag3 = '<br /><h3 id="news-h3-tag3"></h3>';
// p
var newsPTag1 = '<br /><br /><br /><p class="animated slideInLeft" id="news-p-tag1"></p>';
var newsPTag2 = '<p class="animated slideInLeft" id="news-p-tag2"></p>';
var newsPTag3 = '<p class="animated slideInLeft" id="news-p-tag3"></p>';
var newsPTag4 = '<p class="animated slideInLeft" id="news-p-tag4"></p>';
var newsPTag5 = '<p class="animated slideInLeft" id="news-p-tag5"></p>';
// text
var newsHeaderH1TagText = 'News';
var newsH3TagText1 = 'Offering The Latest Comfort Technology';
var newsH3TagText2 = '24 Hour Denture Clinic';
var newsH3TagText3 = 'The Difference Is Service';
var newsPTagText1 = 'Kasper Denture Clinic' +
    '<br />' +
    '3414 28 Ave' +
    '<br />' +
    'Vernon, BC' +
    '<br />' +
    'V1T 1W9' +
    '<br /><br />' +
    '<i class="fa fa-quote-left"></i> Hi Jay,' +
    ' I am hoping you can help me.' +
    ' My husband got very sick a few years ago and was in hospital for 23 days on IV antibiotics.' +
    ' As a result of the antibiotics he began to lose his teeth -' +
    ' they were all root canal-ed and crowned but began to break off below the gum line.' +
    ' They started getting infected and one by one it spread from tooth to tooth.' +
'<br /><br />' +
    'He ended up back in hospital last year with a very bad lung abscess caused from his teeth.' +
    ' The only solution they had was to pull almost all his teeth. They left 5 or 6 up top' +
    " (I don't know why) and the dentist ordered a partial for the top and a full denture for the bottom." +
    " I'm not sure exactly when the dentist ordered these or from where we wouldn't have gone through the dental office." +
    " I'm guessing that my husband agreed to this while sick and on a lot of pain medication." +
    ' Needless to say they were terribly made and unwearable.' +
'<br /><br />' +
    'My dental plan at work only covers new dentures once every 5 years.' +
    ' To make matters worse the dentist sold his practice,' +
    " so there isn't anywhere we can complain and try to get replacements." +
    ' My husband eventually lost his last 5 teeth one by one and just had the last one pulled about a month ago.' +
    ' He also had surgery for mandibular tori as well about 4-5 weeks ago.' +
    ' He could never get his bottom denture in at all as the pain was unbearable due to the tori.' +
'<br /><br />' +
    "Now I'm hoping you can help him. He has no teeth at all now and can hardly eat anything." +
    " He is so embarrassed he won't leave the house or visit friends." +
    ' Our marriage has had no intimacy because his self-esteem is so low.' +
    ' My husband suffers with bipolar disorder and' +
    " I'm sure you can imagine how this impacts his mood." +
    " He hasn't worked for 14 years since being diagnosed in 2003." +
    ' His only income is CPP disability.' +
'<br /><br />' +
    'I worked full time as a nurse until I was injured several years back and' +
    ' now only work as a part time unit clerk.' +
    " I just can't afford to put out the money for new dentures." +
    ' I hate to see him in so much emotional pain.' +
    ' His depression is getting worse and' +
    " some days he won't even get out of bed." +
'<br /><br />' +
    'Do you know of any program available to help with the cost?' +
    ' I have scoured the Internet but nothing is available or' +
    " we don't qualify if there is any help." +
    ' Would you be willing to help? Can I pay you monthly?' +
    ' Would you be willing to discount the price at all?' +
    " I hate to ask it is not in my nature but I'm out of options." +
    ' I very much appreciate you taking the time to read this and' +
    ' would be most grateful for any suggestions,' +
    ' direction or help you are able to offer.' +
    ' Warm regards. <i class="fa fa-quote-right"></i>' +
'<br /><br />' +
'<hr>' +
    'After receiving this email Jason knew he wanted to help.' +
    ' He contacted Terry and had him come into the office for a consultation.' +
    ' Knowing the impact the situation had had on his life,' +
    ' Jason went ahead and agreed to do the case at no charge to the patient.' +
    ' A complete set of Equilibrated SEMCD suction dentures were fabricated for Terry.' +
    ' Terry was a pleasure to have in the office and we couldn’t be happier with the outcome.';
var newsPTagText2 = 'Kasper Denture Clinic specializes in precision full and partial dentures.' +
    ' We stay up-to-date and educated on the latest technology for your comfort and health.' +
    ' We have the Sr-Ivocap System that guarantees a precision fit denture and VELscope technology' +
    ' for detection of previously undetectable oral cancer.' +
    ' A father and son business,' +
    ' we have a combined fifty years of experience that will give you your great smile back!';
var newsPTagText3 = 'Kasper Denture Clinic offers 24 hour turnaround service.' +
    ' Our service is fast, professional and efficient.' +
    ' The Kasper team will back bring that smile and confidence quickly and conveniently.' +
    ' We are here for you with great customer service to get you in and' +
    ' out with the utmost comfort and ease.';
var newsPTagText4 = 'While we offer competitive pricing and years of experience,' +
    ' what truly sets us apart is our dedication to excellent customer service.' +
    ' We believe in the personal touch and the skilled hand.' +
    ' Our customers have confidence in our technology, skill, and know they will be treated like family.' +
    ' You get what you pay for, top quality work and a friendly attitude.';
var newsPTagText5 = '<br /><br />Call <b>250-542-7423</b>';
    // '<a class="btn btn-success" href="appointment.html">Book - Online</a>';




