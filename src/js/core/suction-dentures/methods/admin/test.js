// Img Src Controls =============================================

app.editSuctionDenturesVideo2 = function(
    editSuctionDenturesVideo2SrcBtn,
    saveSuctionDenturesVideo2SrcBtn,
    textAreaSuctionDenturesVideo2Src
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editSuctionDenturesVideo2SrcBtn = '<i type="button" class="fa fa-film edit-btns" id="edit-suction-dentures-video2-src-btn" ' +
        'onclick="app.editSuctionDenturesVideo2Src2()">' +
        ' -copy new video address, click Film icon then paste local file address into the input area.</i>';
    self.saveSuctionDenturesVideo2SrcBtn = '<i type="button" class="fa fa-save edit-btns" id="save-suction-dentures-video2-src-btn" ' +
        'onclick="app.saveSuctionDenturesVideo2Src2()"></i>';
    self.textAreaSuctionDenturesVideo2Src = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="suction-dentures-video2-src-input">' +
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video2Src2 +
        '</textarea>';
    app.editSuctionDenturesVideo2Src2 = function() {
        if ($('#edit-suction-dentures-video2-src-btn')) {
            $('#edit-suction-dentures-video2-src-btn').remove();
        };
        $('#suction-dentures-main-content1-col2-ul-container').append(self.textAreaSuctionDenturesVideo2Src);
        $('#suction-dentures-main-content1-col2-ul-container').append(self.saveSuctionDenturesVideo2SrcBtn);
    }
    app.saveSuctionDenturesVideo2Src2 = function() {
        var usrInput = $('#suction-dentures-video2-src-input').val();
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video2Src2 = usrInput;
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video2 = '<video id="' +
            'suction-dentures-Video2' +
            '" class="center-block"' +
            ' controls="controls controlsList="nodownload" width="500" height="350" name="Suction Dentures 1" ' +
            'src="' +
            self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video2Src2 +
            '"></video>';
        $('#suction-dentures-Video2').remove();
        $('#suction-dentures-main-content1-col2-ul-container').append(
            self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video2
        );
        $('#save-suction-dentures-video2-src-btn').remove();
        $('#suction-dentures-video2-src-input').remove();
        app.saveSuctionDenturesToDB();
    }
    app.createSuctionDenturesVideo2Src2 = function() {
        $('#edit-suction-dentures-video2-src-btn').remove();
        $('#suction-dentures-main-content1-col2-ul-container').append(self.editSuctionDenturesVideo2SrcBtn);
    }
    self.createSuctionDenturesVideo2Src2();
};